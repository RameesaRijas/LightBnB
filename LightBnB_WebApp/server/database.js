const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});
/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  let user = null;
  const users = `SELECT * 
                FROM users
                WHERE email = $1;`;
  const value = [email];
  return pool
          .query(users, value)
          .then((result) => { 
            if(result.rows.length) {
                user = result.rows[0];
            }
            return user;
          })
          .catch(err => err.message);
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {

  const user = `SELECT * 
                FROM users 
                WHERE id = $1;`;
  const value = [id];
  return pool
          .query(user, value)
          .then((result) => result.rows[0])
          .catch(err => err.message);
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {

  const insertQuery = `INSERT INTO users(name, email, password)
                        VALUES($1, $2, $3)
                        RETURNING *;`;
                       
  const values = [user.name, user.email, user.password];
    return pool
      .query(insertQuery, values)
      .then((result) => result.rows[0])
      .catch((err) => err.message);
}

exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  
  const getreservation = `SELECT reservations.*, properties.*, avg(rating) as average_rating
                          FROM reservations
                          JOIN properties ON reservations.property_id = properties.id
                          JOIN property_reviews ON properties.id = property_reviews.property_id
                          WHERE reservations.guest_id = $1
                          AND reservations.end_date < now()::date
                          GROUP BY properties.id, reservations.id
                          ORDER BY reservations.start_date
                          LIMIT $2;`;

  const values = [guest_id, limit];
  return pool.query(getreservation, values)
      .then((result) => result.rows)
      .catch(err => err.message);
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  // 1 Setup an array to hold any parameters that may be available for the query
  const queryParams = [];
  // 2 Start the query with all information that comes before the WHERE clause.
  let queryString = `
  SELECT properties.*, avg(property_reviews.rating) as average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  `;

  // 3 Check if a city, owner_id or price_per_night has been passed in as an option. Add them to the params array and create a WHERE clause
  if (options.city) {
    queryParams.push(`%${options.city}%`);
    queryString += `WHERE city LIKE $${queryParams.length} `;
  }

  if (options.owner_id) {
    queryParams.push(options.owner_id);
    if (queryParams === 1) {
      queryString += `WHERE owner_id = $${queryParams.length} `;
    } else {
      queryString += `AND owner_id = $${queryParams.length} `;
    }
  }

  if (options.minimum_price_per_night) {
    queryParams.push(options.minimum_price_per_night * 100);
    if (queryParams === 1) {
      queryString += `WHERE cost_per_night > $${queryParams.length} `;
    } else {
      queryString += `AND cost_per_night > $${queryParams.length} `;
    }
  }

  if (options.maximum_price_per_night) {
    queryParams.push(options.maximum_price_per_night * 100);
    if (queryParams === 1) {
      queryString += `WHERE cost_per_night < $${queryParams.length} `;
    } else {
      queryString += `AND cost_per_night < $${queryParams.length} `;
    }
  }

  // 4 Add any query that comes after the WHERE clause.
  queryString += `
  GROUP BY properties.id `;

  if (options.minimum_rating) {
    queryParams.push(options.minimum_rating);
    queryString += `HAVING avg(property_reviews.rating) > $${queryParams.length} `;
  }

  queryParams.push(limit);
  queryString += `
  ORDER BY cost_per_night
  LIMIT $${queryParams.length};
  `;
  
  return pool.query(queryString, queryParams).then((res) => res.rows);

}
exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;

$(() => {

  const $propertyListings = $(`
  <section class="property-listings" id="property-listings">
      <p>Loading...</p>
    </section>
  `);
  const $reserve = $(`
  <section class="" id="">
      <p>Loading...</p>
    </section>
  `);

  window.$propertyListings = $propertyListings;

  window.propertyListings = {};

  function addListing(listing) {
    $propertyListings.append(listing);
  }
  function clearListings() {
    $propertyListings.empty();
  }
  window.propertyListings.clearListings = clearListings;

  function addProperties(properties, isReservation = false) {
    clearListings();
    for (const propertyId in properties) {
      const property = properties[propertyId];
      const listing = propertyListing.createListing(property, isReservation);
      addListing(listing);
    }
  }
  window.propertyListings.addProperties = addProperties;

  $propertyListings.on('click', '.property_reservation', function() {
    const modal = reservation.createReservation(this.id);
    $propertyListings.append(modal);
    $("#reservationModal").css("display", "block");
    var dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;
    $('#start_date').attr('min', maxDate);
    $('#end_date').attr('min', maxDate);
  });

  $propertyListings.on('click', 'span', function() {
    $("#reservationModal").css("display", "none");
  });


  $propertyListings.on('submit', '#reservation-form', function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    createReservation(data)
    .then(result => {
        console.log("Reservation Successfull");
        $('.my_reservations_button').trigger('click')
    })
    .catch((err) => err.message);
  });

  

});
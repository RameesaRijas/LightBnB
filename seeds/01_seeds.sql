--seed datas to tables

INSERT INTO users(name, email, password) 
VALUES('Eva Stanley', 'sebastianguerra@ymail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.        JBIDRh70tGevYzYzQgFId2u.'),
    ('Louisa Meyer', 'jacksonrose@hotmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
    ('Dominic Parks', 'victoriablackwell@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
    ('Sue Luna', 'jasonvincent@gmx.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
    ('Rosalie Garza', 'rosalia@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
    ('Etta West', 'westetta@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
    ('Margaret Wong', 'makaylaweiss@icloud.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
    ('Leroy Hart', 'leroyhart@outlook.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
    ('walsh tim', 'timw@yahoo.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');


INSERT INTO properties(owner_id, title, description, thumbnail_photo_url,cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active) 
VALUES (1,'Speed lamp', 'description', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg', 930.61, 6, 4, 8, 'Canada', '15 parkway', 'Richmond Hill', 'Ontario', 12345, true),
(2,'Blank corner', 'description', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg', 500, 3, 3, 3, 'Canada', '513 Powov Grove', 'Jaebvap', 'Ontario', 768575, true),

(2,'Green house', 'description', 'https://images.pexels.com/photos/1756826/pexels-photo-1756826.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1756826/pexels-photo-1756826.jpeg', 1000, 5, 6, 6, 'Canada', '513 missisuga road', 'missisuaga', 'Ontario', 98494, true),

(3,'Fun Mix', 'description', 'https://images.pexels.com/photos/2089345/pexels-photo-2089345.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/2089345/pexels-photo-2089345.jpeg', 900, 2, 4, 4, 'Canada', '51 queens', 'toronto', 'Ontario', 32323, true),

(4,'Game Fun', 'description', 'https://images.pexels.com/photos/1756825/pexels-photo-1756825.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1756825/pexels-photo-1756825.jpeg', 1200, 5, 5, 6, 'Canada', '5 kings', 'toronto', 'Ontario', 32323, true),

(4,'Kings Palace', 'description', 'https://images.pexels.com/photos/1756834/pexels-photo-1756834.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1756834/pexels-photo-1756834.jpeg', 1500, 6, 7, 7, 'Canada', '25 kings', 'toronto', 'Ontario', 32322, true),

(5,'hallway', 'description', 'https://images.pexels.com/photos/1553434/pexels-photo-1553434.jpeg?auto=compress&cs=tinysrgb&h=350', 'https://images.pexels.com/photos/1553434/pexels-photo-1553434.jpeg', 1100, 6, 7, 7, 'Canada', '12 hollywood', 'toronto', 'Ontario', 434322, false);


INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES('2018-09-11', '2018-09-26', 2 , 3),
      ('2019-01-04', '2019-02-01', 2, 2),
      ('2021-10-01', '2021-10-14', 1, 4),
      ('2014-10-21', '2014-10-21', 3, 5),
      ('2016-07-17', '2016-08-01', 3, 4),
      ('2018-05-01', '2018-05-27', 4, 8),
      ('2022-10-04', '2022-10-23', 5, 1),
      ('2015-09-13', '2015-09-30', 6, 8),
      ('2023-05-27', '2023-05-28', 4, 2);


INSERT INTO property_reviews (guest_id, property_id,  reservation_id, rating, message)
VALUES (2, 5, 9, 3, 'messages'),
      (1, 4, 1, 4, 'Messages'),
      (8, 1, 2, 4, 'messages'),
      (3, 6, 5, 4, 'messages'),
      (4, 2, 7, 5, 'messages'),
      (4, 3, 4, 1, 'messages'),
      (5, 6, 3, 5, 'messages');

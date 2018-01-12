DROP DATABASE IF EXISTS discoverAustin;

CREATE DATABASE discoverAustin;

USE discoverAustin;

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  last_name varchar(50) NOT NULL,
  first_name varchar(50) NOT NULL,
  email varchar(50) NOT NULL UNIQUE,
  facebook_id varchar(50) NOT NULL UNIQUE,
  picture_url varchar(250),
  total_points int DEFAULT 0,
  PRIMARY KEY (ID)
);

CREATE TABLE Categories (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Achievements (
  id int NOT NULL AUTO_INCREMENT,
  category_id int NOT NULL,
  description varchar(50) NOT NULL,
  points int NOT NULL,
  yelp_url varchar(250) NOT NULL,
  image varchar(250) NOT NULL,
  latitude decimal(10, 8) NOT NULL,
  longitude decimal(11, 8) NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (category_id) REFERENCES categories (id)
);

CREATE TABLE Users_Achievements (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  achievement_id int NOT NULL,
  date date,
  PRIMARY KEY (ID),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (achievement_id) REFERENCES achievements (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < schema.sql
*/

INSERT INTO Categories (id, name) VALUES (1, 'Austin Landmarks');
INSERT INTO Categories (id, name) VALUES (2, 'Museums');

INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (1, 1, 'State Capitol', 75, 'https://www.yelp.com/biz/texas-state-capitol-austin?osq=austin+state+capitol','http://www.trailergypsies.com/_images/042908_1497.jpg', 30.274296, 97.740486);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (2, 1, 'Hack Reactor', 25, 'https://www.yelp.com/biz/hack-reactor-austin-austin', 'https://pbs.twimg.com/media/DQ8wUAgVQAEX8o1.jpg', 30.269817, 97.740787);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (3, 1, 'Barton Springs', 40, 'https://www.yelp.com/biz/barton-springs-pool-austin','http://cdn-image.travelandleisure.com/sites/default/files/styles/marquee_large_2x/public/1458762675/barton-springs-pool-austin-aus0316.jpg?itok=iN7LX0OV', 30.263718, 97.771541);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (4, 1, 'Lady Bird Lake', 25, 'https://www.yelp.com/biz/lady-bird-lake-austin', 'https://www.austintexas.gov/sites/default/files/images/Parks/Parks/Boardwalk_GO_pier.jpg', 30.245954, 97.715516);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (5, 1, 'The Driskill', 30, 'https://www.yelp.com/biz/the-driskill-in-the-unbound-collection-by-hyatt-austin?osq=the+driskell', 'http://travelskills.com/wp-content/uploads/2016/03/driskill.jpg', 30.268157, 97.741672);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (6, 1, 'Nathans Chiptole', 25, 'https://www.yelp.com/biz/chipotle-mexican-grill-austin-15?osq=Chipotle+Mexican+Grill', 'https://media1.s-nbcnews.com/j/newscms/2017_29/2076501/170715-chipotle-restaurant-ew-1227p_5fa0d17495b09c2189e8632005bc9e95.nbcnews-ux-2880-1000.jpg', 30.269957, 97.741907);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (7, 1, 'Hamilton Pool', 90, 'https://www.yelp.com/biz/hamilton-pool-preserve-dripping-springs-2?osq=Hamilton+Pool+Reserve', 'https://c1.staticflickr.com/3/2628/4086352981_7d0ea1e8cf_z.jpg?zz=1', 30.342320, 98.126969);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (8, 1, 'Broken Spoke', 25, 'https://www.yelp.com/biz/broken-spoke-austin', 'https://static.wixstatic.com/media/6914fa_760e0c2426e742c68d1e041d1988da0c.jpg/v1/fill/w_440,h_234,al_c,q_80,usm_0.66_1.00_0.01/6914fa_760e0c2426e742c68d1e041d1988da0c.webp', 30.240744, 97.785170);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (9, 1, 'Bats Bridge', 50, 'https://www.yelp.com/biz/bats-under-the-congress-avenue-bridge-austin', 'http://www.videocityguide.com/austin/PCWUploads/Congress%20Bridge%20Bats/gallery3.jpg', 30.261864, 97.744994);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (10, 1, 'Uncommon Objects', 35, 'https://www.yelp.com/biz/uncommon-objects-austin', 'https://i.pinimg.com/originals/56/15/ca/5615caa43df42037209e2b352af59b4f.jpg', 30.229064, 97.783048);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (11, 1, 'Mount Bonnell', 70, 'https://www.yelp.com/biz/mount-bonnell-austin', 'https://activerain-store.s3.amazonaws.com/image_store/uploads/1/0/3/0/4/ar126383198740301.jpg', 30.321066, 97.773506);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (12, 1, 'Spider House', 20, 'https://www.yelp.com/biz/spider-house-cafe-and-ballroom-austin-3', 'https://res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,h_630,w_1200/v1449512305/venue-680.jpg', 30.295498, 97.741759);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (13, 1, 'Texas Memorial Stadium', 30, 'https://www.yelp.com/biz/darrell-k-royal-texas-memorial-stadium-austin', 'http://www.burntx.com/wp-content/uploads/2016/09/DKR.jpg', 30.282514, 97.731700);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (14, 1, 'Veggie Heaven', 25, 'https://www.yelp.com/biz/veggie-heaven-austin-3', 'https://www.austinchronicle.com/imager/b/original/46346/8874/veggieheaven.jpeg', 30.274365, 97.764328);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (15, 1, 'Alamo Drafthouse Cinema', 45, 'https://www.yelp.com/biz/alamo-drafthouse-cinema-the-ritz-austin', 'https://s3-media1.fl.yelpcdn.com/bphoto/jLFFWobU5XgetqtRUUUS1g/o.jpg', 30.267248, 97.739594);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (16, 1, 'Nomad Bar', 20, 'https://www.yelp.com/biz/nomad-bar-austin', 'https://cdn.vox-cdn.com/thumbor/stOEb0VkkM3SGbM5PU5RC6HDbxI=/0x0:1000x750/1200x900/filters:focal(420x295:580x455)/cdn.vox-cdn.com/uploads/chorus_image/image/55920315/nomad_bar_austin.0.jpg', 30.312633, 97.704835);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (17, 1, 'Pinballz Arcade', 60, 'https://www.yelp.com/biz/pinballz-arcade-austin', 'https://res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,h_630,w_1200/v1482964131/event-7132878.jpg', 30.370009, 97.721512);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (18, 1, 'Peter Pan Mini Golf', 30, 'https://www.yelp.com/biz/peter-pan-mini-golf-austin', 'http://365thingsaustin.com/wp-content/uploads/2015/10/ar126417205646248-2.jpg', 30.260281, 97.757684);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (19, 1, 'City-Wide Garage Sale', 65, 'https://www.yelp.com/biz/city-wide-garage-sale-austin', 'https://i.pinimg.com/564x/c3/88/ec/c388ec035ff8771f680ae140622320f3--texas-vacations-austin-texas.jpg', 30.260658, 97.752888);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (20, 1, 'Hippie Hollow', 35, 'https://www.yelp.com/biz/hippie-hollow-park-austin', 'https://findinghouston.files.wordpress.com/2011/08/img_1801.jpg', 30.414358, 97.886503);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (21, 1, 'Franklin Barbecue', 55, 'https://www.yelp.com/biz/franklin-barbecue-austin', 'https://drycreekchronicles.files.wordpress.com/2014/07/capture1.jpg', 30.270205, 97.731267);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (22, 1, 'Mayfield Park', 20, 'https://www.yelp.com/biz/mayfield-park-austin', 'https://kristyowen1.files.wordpress.com/2010/03/mayfield-park.jpg', 30.312617, 97.770693);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (23, 1, 'Cathedral of Junk', 40, 'https://www.yelp.com/biz/cathedral-of-junk-austin', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Cathedral_of_junk_austin.jpg', 30.218682, 97.771510);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (24, 1, 'The Paramount Theatre', 15, 'https://www.yelp.com/biz/paramount-theatre-for-the-performing-arts-austin-2', 'https://www.centre.edu/wp-content/uploads/2014/01/paramount-theatre-austin-texa.jpg', 30.269458, 97.742135);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (25, 1, 'Lady Bird Johnson Wildflower Center', 25, 'https://www.yelp.com/biz/lady-bird-johnson-wildflower-center-austin-2', 'https://soa.utexas.edu/sites/default/disk/styles/flexslider_full/public/media/wildflower.jpg?itok=-CMwEZqL', 30.185373, 97.873320);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (26, 1, 'Terry Black\'s Barbecue', 20, 'https://www.yelp.com/biz/terry-blacks-barbecue-austin', 'http://terryblacksbbq.com/site/assets/files/1032/terryblacks-legendary-slide.jpg', 30.259693, 97.754894);
INSERT INTO Achievements (id, category_id, description, points, yelp_url, image, latitude, longitude) VALUES (27, 1, 'Hope Outdoor Gallery', 55, 'https://www.yelp.com/biz/hope-outdoor-gallery-austin-2', 'http://also.coffee/wp-content/uploads/2017/05/Hope-Outdoor-Gallery-Austin-Tx-021.jpg', 30.276070, 97.753242);

INSERT INTO Users (id, first_name, last_name, email, picture_url, total_points, facebook_id) VALUES (1, 'Mario', 'Johnson', 'redoveralls@yahoo.com', 'https://media.nintendo.com/nintendo/bin/UOIekvv9YnMZx4CpweP-v4HDIzmqag9J/HpMzIWmEi7j1uKqpBXziLb6qOVKkgjco.jpg', 250, '124123412341234');
INSERT INTO Users (id, first_name, last_name, email, picture_url, total_points, facebook_id) VALUES (2, 'Luigi',  'Smith', 'greenoveralls@yahoo.com', 'https://static.giantbomb.com/uploads/scale_small/9/99864/2389814-nsmbuluigi.png', 450, '124123412341235');
INSERT INTO Users (id, first_name, last_name, email, picture_url, total_points, facebook_id) VALUES (3, 'Princess', 'Leia', 'pinkdress@yahoo.com', 'https://gaygeekgab.files.wordpress.com/2015/08/img_6792.jpg?w=396&zoom=2', 550, '124123412341236');
INSERT INTO Users (id, first_name, last_name, email, picture_url, total_points, facebook_id) VALUES (4, 'Yoshi', 'Williams', 'stickytongue@yahoo.com', 'http://images5.fanpop.com/image/photos/30400000/Yoshi-snowboard-yoshi-30430714-455-480.png', 600, '124123412341237');
INSERT INTO Users (id, first_name, last_name, email, picture_url, total_points, facebook_id) VALUES (5, 'Bowser', 'Jones', 'boomboompow@yahoo.com', 'https://vignette.wikia.nocookie.net/fantendo/images/d/d1/Character-bowser.png/revision/latest/scale-to-width-down/531?cb=20150321152800', 500, '124123412341238');
INSERT INTO Users (id, first_name, last_name, email, picture_url, total_points, facebook_id) VALUES (6, 'Wario', 'Miller', 'yourfutureleader@yahoo.com', 'http://images4.fanpop.com/image/photos/23800000/Wario-wario-and-waluigi-23803078-300-294.jpg', 250, '124123412341239');

INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (1, 1, 1, '2017-08-02');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (2, 2, 1, '2017-08-03');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (3, 3, 2, '2017-08-20');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (4, 4, 2, '2017-08-06');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (5, 5, 3, '2017-08-02');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (6, 6, 3, '2017-08-04');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (7, 6, 4, '2017-08-18');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (8, 1, 4, '2017-08-17');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (9, 3, 5, '2017-08-19');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (10, 5, 5, '2017-08-03');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (11, 2, 6, '2017-08-02');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (12, 1, 6, '2017-08-04');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (13, 5, 7, '2017-08-05');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (14, 1, 7, '2017-08-02');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (15, 4, 1, '2017-08-10');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (16, 5, 1, '2017-08-30');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (17, 5, 2, '2017-08-27');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (18, 2, 2, '2017-08-16');
INSERT INTO Users_Achievements (id, user_id, achievement_id, date) VALUES (19, 3, 3, '2017-08-16');

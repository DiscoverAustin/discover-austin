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

INSERT INTO Achievements (id, category_id, description, points, yelp_url) VALUES (1, 1, 'State Capitol', 75, 'https://www.yelp.com/biz/texas-state-capitol-austin');
INSERT INTO Achievements (id, category_id, description, points, yelp_url) VALUES (2, 1, 'Hack Reactor', 75, 'https://www.yelp.com/biz/hack-reactor-austin-austin');
INSERT INTO Achievements (id, category_id, description, points, yelp_url) VALUES (3, 1, 'Barton Springs', 75, 'https://www.yelp.com/biz/barton-springs-pool-austin');
INSERT INTO Achievements (id, category_id, description, points, yelp_url) VALUES (4, 1, 'Lady Bird Lake', 75, 'https://www.yelp.com/biz/lady-bird-lake-austin');
INSERT INTO Achievements (id, category_id, description, points, yelp_url) VALUES (5, 1, 'The Driskill', 75, 'https://www.yelp.com/biz/the-driskill-in-the-unbound-collection-by-hyatt-austin');
INSERT INTO Achievements (id, category_id, description, points, yelp_url) VALUES (6, 1, 'Antone\'s Nightclub', 75, 'https://www.yelp.com/biz/antones-nightclub-austin-6');
INSERT INTO Achievements (id, category_id, description, points, yelp_url) VALUES (7, 2, 'The Blanton Museum', 75, 'https://www.yelp.com/biz/the-blanton-museum-of-art-austin');

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

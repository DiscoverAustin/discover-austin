DROP DATABASE IF EXISTS discoverAustin;

CREATE DATABASE discoverAustin;

USE discoverAustin;

CREATE TABLE Users (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  email varchar(50) NOT NULL UNIQUE,
  facebookId int UNIQUE,
  pictureUrl varchar(100),
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

INSERT INTO Achievements (id, category_id, description, points) VALUES (1, 1, 'State Capitol', 75);
INSERT INTO Achievements (id, category_id, description, points) VALUES (2, 1, 'Hack Reactor', 75);
INSERT INTO Achievements (id, category_id, description, points) VALUES (3, 1, 'Barton Springs', 75);
INSERT INTO Achievements (id, category_id, description, points) VALUES (4, 1, 'Lady Bird Lake', 75);
INSERT INTO Achievements (id, category_id, description, points) VALUES (5, 1, 'The Driskell', 75);
INSERT INTO Achievements (id, category_id, description, points) VALUES (6, 1, '6th Street', 75);
INSERT INTO Achievements (id, category_id, description, points) VALUES (7, 2, 'The Blanton Museum', 75);

INSERT INTO Users (id, name, email) VALUES (1, 'Mario', 'redoveralls@yahoo.com');
INSERT INTO Users (id, name, email) VALUES (2, 'Luigi', 'greenoveralls@yahoo.com');
INSERT INTO Users (id, name, email) VALUES (3, 'Princess', 'pinkdress@yahoo.com');
INSERT INTO Users (id, name, email) VALUES (4, 'Yoshi', 'stickytongue@yahoo.com');
INSERT INTO Users (id, name, email) VALUES (5, 'Bowser', 'boomboompow@yahoo.com');
INSERT INTO Users (id, name, email) VALUES (6, 'Wario', 'yourfutureleader@yahoo.com');

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

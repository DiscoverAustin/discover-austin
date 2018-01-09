const mysql = require('promise-mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig)
  .then((conn) => {
    console.log('Successfully connected to mysql database!');
    return conn;
  })
  .catch(e => console.error('Error connecting to mysql database!: ', e.stack));


const getAllUsers = () => (
  connection
    .then(db => db.query('SELECT * FROM users'))
    .catch((e) => {
      console.error('Error retreiving from database!: ', e);
      throw (e);
    })
);

const getUserInfo = id => (
  connection
    .then(db => db.query(`SELECT * FROM users WHERE id = ${id}`))
    .catch((e) => {
      console.error('Error retreiving from database!: ', e);
      throw (e);
    })
);

const getUserAchievements = id => (
  connection
    .then(db => db.query(`SELECT * FROM achievements a, users_achievements ua, users u 
                          WHERE u.id = ${id} AND a.id = ua.achievement_id AND u.id = ua.user_id`))
    .catch((e) => {
      console.error('Error retreiving from database!: ', e);
      throw (e);
    })
);

const getLeaderboard = () => (
  connection
    .then(db => db.query('SELECT name, total_points FROM users ORDER BY total_points DESC LIMIT 10'))
    .catch((e) => {
      console.error('Error retreiving from database!: ', e);
      throw (e);
    })
);

// this one will need to be updated w/ first name / last name parameters once schema is updated
const addNewUser = (name, email, facebookId, pictureUrl) => (
  connection
    .then(db => db.query(`INSERT INTO users (name, email, facebook_id, picture_url, total_points) VALUES (${name}, ${email}, ${facebookId}, ${pictureUrl}, 0)`))
    .catch((e) => {
      console.error('Error retreiving from database!: ', e);
      throw (e);
    })
);

const updateUserTotalPoints = newPointTotal => (
  connection
    .then(db => db.query(`UPDATE users SET total_points = ${newPointTotal}`))
    .catch((e) => {
      console.error('Error retreiving from database!: ', e);
      throw (e);
    })
);

// need to also update current point total when adding an achievement
const addCompletedAchievement = (userId, achievementId) => (
  connection
    .then(db => db.query(`INSERT INTO Users_Achievements (user_id, achievement_id, date) VALUES (${userId}, ${achievementId}, now())`))
    .catch((e) => {
      console.error('Error retreiving from database!: ', e);
    })
);

const getFeed = () => (
  connection
    .then(db => db.query('SELECT * FROM achievements a, users_achievements ua, users u WHERE a.id = ua.achievement_id AND u.id = ua.user_id ORDER BY date DESC LIMIT 20'))
    .catch((e) => {
      console.error('Error retreiving from database!: ', e);
    })
);

const getAllAchievements = () => (
  connection
    .then(db => db.query('SELECT * from achievements'))
    .catch((e) => {
      console.error('Error retreiving from database!: ', e);
    })
);

module.exports = {
  getAllUsers,
  getUserInfo,
  getLeaderboard,
  addCompletedAchievement,
  addNewUser,
  getUserAchievements,
  updateUserTotalPoints,
  getAllAchievements,
  getFeed,
};

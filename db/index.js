const mysql = require('promise-mysql');
const mysqlConfig = require('./config.js');
const mysql2 = require('mysql');


const connection = mysql.createConnection(mysqlConfig)
  .catch(e => console.error('Error connecting to mysql database!: ', e.stack));

// Non-promisified mysql connection solely for session storage
const connection2 = mysql2.createConnection(mysqlConfig);

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


const getUserByFacebookId = facebookId => (
  connection
    .then(db => db.query(`SELECT * FROM users WHERE facebook_id = ${facebookId}`))
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

const createUser = (userInfo) => {
  const { firstName, lastName, email, facebookId, pictureUrl } = userInfo;
  connection
    .then(db => db.query(`
      INSERT INTO users (first_name, last_name, email, facebook_id, picture_url)
      VALUES ('${firstName}', '${lastName}', '${email}', ${facebookId}, '${pictureUrl}');`))
    .catch((e) => {
      console.error('Error inserting user into database!: ', e);
      throw (e);
    });
};

const findOrCreateUser = userInfo => (
  getUserByFacebookId(userInfo.facebookId)
    .then((userArray) => {
      if (userArray.length) {
        return JSON.parse(JSON.stringify(userArray[0]));
      }
      return createUser(userInfo);
    })
    .catch((e) => {
      console.error('Error findingOrCreatingUser!: ', e);
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
  connection2,
  getAllUsers,
  getUserInfo,
  getUserByFacebookId,
  createUser,
  findOrCreateUser,
  getLeaderboard,
  addCompletedAchievement,
  getUserAchievements,
  updateUserTotalPoints,
  getAllAchievements,
  getFeed,
};

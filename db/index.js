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

const getUserByFacebookId = facebookId => (
  connection
    .then(db => db.query(`SELECT * FROM users WHERE facebook_id = ${facebookId}`))
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
      console.log('result from findOrCreateUser!: ', userArray);
      if (userArray.length) {
        return JSON.parse(JSON.stringify(userArray[0]));
      } else {
        return createUser(userInfo);
      }

    })
    .then((res) => {
      console.log('res from getUserByFacebookId: ', res);
      return res;
    })
    .catch((e) => {
      console.error('Error findingOrCreatingUser!: ', e);
      throw (e);
    })
);

module.exports = {
  getAllUsers,
  getUserInfo,
  getUserByFacebookId,
  createUser,
  findOrCreateUser,
};

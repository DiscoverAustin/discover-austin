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
    .catch((e) => { throw (e); })
);

// const getUserInfo = ()

module.exports = {
  getAllUsers,
};

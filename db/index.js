const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllUsers = () => (
  new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', (err, res) => {
      if (err) { reject(err); }
      resolve(res);
    });
  })
);

module.exports = {
  getAllUsers,
};

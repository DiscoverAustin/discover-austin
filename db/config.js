if (process.env.NODE_ENV === 'production') {
  module.exports = {
    host: 'us-cdbr-iron-east-05.cleardb.net',
    database: 'heroku_4df7e9229521329',
    user: 'bc33747568837f',
    password: 'e81c2286',
  };
} else {
  module.exports = {
    user: 'root',
    database: 'discoverAustin',
  };
}

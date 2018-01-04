const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const DIST_DIR = path.join(__dirname, '../dist');
const CLIENT_DIR = path.join(__dirname, '../src/');
const CLIENT_SECRET = require('./secrets/secrets.js');

const app = express();
const port = process.env.PORT || 3000;
const APP_DOMAIN = process.env.DOMAIN || `http://localhost:${3000}`;

passport.use(new FacebookStrategy({
  clientID: '158163551574274',
  clientSecret: CLIENT_SECRET,
  callbackURL: `${APP_DOMAIN}/auth/facebook/callback`,
}));

app.use(express.static(DIST_DIR));
app.use(morgan('dev'));
app.use(bodyParser.json());

/* --------- GET Handlers ---------- */

app.get('/src/styles/styles.css', (req, res) => {
  res.sendFile(path.join(CLIENT_DIR, 'styles/styles.css'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

/* --------- POST Handlers ---------- */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

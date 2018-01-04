const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

const DIST_DIR = path.join(__dirname, '../dist');
const CLIENT_DIR = path.join(__dirname, '../src/');
const CLIENT_SECRET = require('./secrets/secrets.js');

const app = express();
const port = process.env.PORT || 3000;
const APP_DOMAIN = process.env.DOMAIN || `http://localhost:${port}`;

const sessionOptions = {
  saveUninitialized: true,
  resave: true,
  // store: sessionStore,
  secret: 'Was zum Teufel!',
  cookie: { httpOnly: true, maxAge: 2419200000 },
};

app.use(express.static(DIST_DIR));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID: '158163551574274',
  clientSecret: CLIENT_SECRET,
  callbackURL: `${APP_DOMAIN}/auth/facebook/callback`,
  profileFields: ['first_name', 'last_name'],
  enableProof: true,
}, (accessToken, refreshToken, profile, done) => {
  console.log('new profile!: ', profile);
  done(null, 'true');
}));

/* --------- GET Handlers ---------- */

app.get('/src/styles/styles.css', (req, res) => {
  res.sendFile(path.join(CLIENT_DIR, 'styles/styles.css'));
});

app.get('/src/styles/leaflet.css', (req, res) => {
  res.sendFile(path.join(CLIENT_DIR, 'styles/leaflet.css'));
});

app.get('/auth/facebook', passport.authenticate('facebook', {
  authType: 'rerequest',
  scope: ['email', 'public_profile'],
}));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/login',
}), (req, res) => { res.redirect('/'); });

app.get('/hahah', (req, res) => {
  res.send('bahahaha').end('hahaha');
});

app.get('/login', (req, res) => {
  res.send('lol wrong').end('lolol wrong');
});

/* --------- API Routes ---------- */

app.get('/api/leaderboard', (req, res) => {
  const leaders = [
    {
      name: 'Bob',
      score: 1,
    }, {
      name: 'Bobby',
      score: 2,
    }, {
      name: 'Rob',
      score: 10,
    }, {
      name: 'Robert',
      score: 12,
    }, {
      name: 'Bobbina',
      score: 14,
    }, {
      name: 'Bobber',
      score: 119,
    }, {
      name: 'Billy Bob',
      score: 205,
    }, {
      name: 'Bob the Builder',
      score: 1000,
    },
  ];
  const stringifiedLeaders = JSON.stringify(leaders);
  res.send(stringifiedLeaders).status(201).end();
});

/* --------- POST Handlers ---------- */


// Default route fallback (allows React Router to handle routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});


/* --------- POST Handlers ---------- */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

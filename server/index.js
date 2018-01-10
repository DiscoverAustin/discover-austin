const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const MySQLStore = require('express-mysql-session')(session);

const db = require('../db');

const app = express();
const http = require('http').Server(app);

const io = require('socket.io')(http);
const socket = require('./sockets');

socket(io);

const DIST_DIR = path.join(__dirname, '../dist');
const CLIENT_DIR = path.join(__dirname, '../src/');

const CLIENT_SECRET = global.CLIENT_SECRET ? global.CLIENT_SECRET : require('./secrets/secrets.js'); // eslint-disable-line

const port = process.env.PORT || 3000;
const APP_DOMAIN = process.env.DOMAIN || 'http://localhost';
const host = `${APP_DOMAIN}:${port}`;

const sessionStoreOptions = {
  checkExpirationInterval: 1000 * 60 * 15, // Every 15 minutes
  expiration: 1000 * 60 * 60 * 24, // Every 24 hours
  createDatabaseTable: true,
  schema: {
    tableName: 'Sessions',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data',
    },
  },
};

const sessionStore = new MySQLStore(sessionStoreOptions, db.connection2);

const sessionOptions = {
  saveUninitialized: false,
  resave: false,
  secret: 'Was zum Teufel!',
  maxAge: 1000 * 60 * 15,
  store: sessionStore,
  name: 'discoverAustin',
};

app.use(express.static(DIST_DIR));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.facebook_id);
});

passport.deserializeUser((facebookId, done) => {
  console.log('deserialize!');
  db.getUserByFacebookId(facebookId)
    .then((foundUser) => {
      done(null, foundUser);
    })
    .catch((e) => {
      console.error('Error deserializing user!: ', e);
    });
});

passport.use(new FacebookStrategy({
  clientID: '158163551574274',
  clientSecret: CLIENT_SECRET,
  callbackURL: `${host}/auth/facebook/callback`,
  profileFields: ['first_name', 'last_name', 'email', 'picture.type(large)'],
  enableProof: true,
}, (accessToken, refreshToken, profile, done) => {
  const facebookId = profile.id;
  const { familyName: lastName, givenName: firstName } = profile.name;
  const email = profile.emails[0].value;
  const pictureUrl = profile.photos[0].value;
  const userInfo = {
    firstName,
    lastName,
    email,
    facebookId,
    pictureUrl,
  };
  db.findOrCreateUser(userInfo)
    .then((result) => {
      done(null, result);
    })
    .catch((e) => { console.error(e); });
}));

/* --------- GET Handlers ---------- */
app.get('*', (req, res, next) => {
  console.log('req.user: ', req.user);
  // console.log('req.user: ', JSON.parse(JSON.stringify(req.user)));
  console.log('req.session: ', req.session);
  next();
});

app.get('/auth/facebook', passport.authenticate(
  'facebook',
  {
    authType: 'rerequest',
    scope: ['email', 'public_profile'],
  },
));

app.get('/auth/facebook/callback', passport.authenticate(
  'facebook',
  { failureRedirect: '/login' },
), (req, res) => { res.redirect('/'); });


app.get('/src/styles/styles.css', (req, res) => {
  res.sendFile(path.join(CLIENT_DIR, 'styles/styles.css'));
});

app.get('/src/styles/leaflet.css', (req, res) => {
  res.sendFile(path.join(CLIENT_DIR, 'styles/leaflet.css'));
});


// app.get('/login', (req, res) => {
//   res.send('lol wrong').end('lolol wrong');
// });
//
// app.get('*', (req, res) => {
//   console.log('isAuthenticated: ', req.isAuthenticated());
//   console.log('req.session: ', req.sesssion);
//
//   // next();
//   res.sendFile(path.join(DIST_DIR, 'index.html'));
// });
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
  ].sort((a, b) => b.score - a.score);
  const stringifiedLeaders = JSON.stringify(leaders);
  res.send(stringifiedLeaders).status(201).end();
});

app.get('/api/getUserInfo', (req, res) => {
  const { id } = req.body;
  db.getUserInfo(id)
    .then((user) => { res.send(user); })
    .catch((e) => { console.error(e); });
});

app.get('/api/getAllUsers', (req, res) => {
  db.getAllUsers()
    .then((users) => { res.send(users); })
    .catch((e) => { console.error(e); });
});


/* --------- POST Handlers ---------- */


// Default route fallback (allows React Router to handle all other routing)
app.get('*', (req, res) => {
  console.log('isAuthenticated: ', req.isAuthenticated());
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});


http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

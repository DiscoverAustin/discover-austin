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
const BUNDLE = path.join(__dirname, '../dist/bundle');
const CLIENT_DIR = path.join(__dirname, '../src/');

const CLIENT_SECRET = global.CLIENT_SECRET ? global.CLIENT_SECRET : require('../secrets').FACEBOOK_CLIENT_SECRET; // eslint-disable-line

const port = process.env.PORT || 3000;
const APP_DOMAIN = process.env.DOMAIN || 'http://localhost';
const host = `${APP_DOMAIN}:${port}`;

const sessionStoreOptions = {
  checkExpirationInterval: 1000 * 60 * 15, // Every 15 minutes
  expiration: 1000 * 60 * 60 * 48, // Every 48 hours
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
  store: sessionStore,
  name: 'discoverAustin',
  cookie: { maxAge: 1000 * 60 * 60 * 48 },
};

app.use('/static', express.static(CLIENT_DIR));
app.use(express.static(BUNDLE));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());


/* --------- Passport/Facebook Authentication Setup ---------- */

passport.serializeUser((user, done) => {
  done(null, user.facebook_id);
});

passport.deserializeUser((facebookId, done) => {
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
      console.log('result!; ', result);
      done(null, result);
    })
    .catch((e) => { console.error(e); });
}));


/* --------- GET Handlers ---------- */

app.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    console.log('hit');
    res.sendFile(path.join(DIST_DIR, 'login.html'));
  } else {
    console.log('hit2');
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  }
});

app.get('/auth/facebook/callback', passport.authenticate(
  'facebook',
  {
    failureRedirect: '/',
    successRedirect: '/',
  },
));

app.get('/auth/facebook', passport.authenticate(
  'facebook',
  {
    authType: 'rerequest',
    scope: ['email', 'public_profile'],
  },
));

// Authentication check for all subsequent routes

/* --------- API Routes ---------- */
app.get('*', (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/');
  } else {
    next();
  }
});


/* --------- API Routes ---------- */

app.get('/api/leaderboard', (req, res) => {
  db.getLeaderboard()
    .then((leaders) => {
      res.send(JSON.stringify(leaders)).status(201).end();
    });
});

app.get('/api/getUserInfo', (req, res) => {
  let { facebookId } = req.query;
  if (!req.query.facebookId) {
    facebookId = req.user[0].facebook_id;
  }
  db.getUserInfo(facebookId)
    .then((user) => { res.send(user); })
    .catch((e) => { console.error(e); });
});

app.get('/api/getAllUsers', (req, res) => {
  db.getAllUsers()
    .then((users) => { res.send(users); })
    .catch((e) => { console.error(e); });
});

app.get('/api/getUserAchievements', (req, res) => {
  let { facebookId } = req.query;
  if (!req.query.facebookId) {
    facebookId = req.user[0].facebook_id;
  }
  db.getUserAchievements(facebookId)
    .then((achievements) => {
      const achievArray = [];
      achievements.map(elem => achievArray.push(elem.description));
      res.send(achievArray);
    })
    .catch((e) => { console.error(e); });
});

app.get('/api/getAllAchievements', (req, res) => {
  db.getAllAchievements()
    .then((achievements) => { res.send(achievements); })
    .catch((e) => { console.error(e); });
});

app.get('/api/isLoggedIn', (req, res) => {
  const isLoggedIn = req.isAuthenticated();
  res.send({ isLoggedIn }).end();
});

app.get('/api/feed', (req, res) => {
  db.getFeed()
    .then((feed) => { res.send(feed); })
    .catch((e) => { console.error(e); });
});

app.post('/api/logout', (req, res) => {
  req.session.cookie.maxAge = 0;
  req.logout();
  res.clearCookie('discoverAustin');
  res.sendFile(path.join(DIST_DIR, 'login.html'));
});


/* --------- Default Fallback Route ---------- */

app.get('*', (req, res) => {
  if (!req.isAuthenticated()) {
    res.sendFile(path.join(DIST_DIR, 'login.html'));
  } else {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  }
});


/* --------- Server Initialization ---------- */

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

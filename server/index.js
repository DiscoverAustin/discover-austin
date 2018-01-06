const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const app = express();

/*
   This block below allows both express-http requests &
   socket.io socket connections to be simultaneously served:
*/
const http = require('http').Server(app);
const io = require('socket.io')(http);
const socket = require('./sockets');

socket(io);


const DIST_DIR = path.join(__dirname, '../dist');
const CLIENT_DIR = path.join(__dirname, '../src/');
const port = process.env.PORT || 3000;

app.use(express.static(DIST_DIR));
app.use(morgan('dev'));
app.use(bodyParser.json());

/* --------- GET Handlers ---------- */

app.get('/src/styles/styles.css', (req, res) => {
  res.sendFile(path.join(CLIENT_DIR, 'styles/styles.css'));
});

app.get('/src/styles/leaflet.css', (req, res) => {
  res.sendFile(path.join(CLIENT_DIR, 'styles/leaflet.css'));
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
  ].sort((a, b) => b.score - a.score);
  const stringifiedLeaders = JSON.stringify(leaders);
  res.send(stringifiedLeaders).status(201).end();
});

/* --------- POST Handlers ---------- */


// Default route fallback (allows React Router to handle routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});


http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

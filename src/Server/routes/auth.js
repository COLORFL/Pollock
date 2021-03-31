const express = require('express');
const path = require('path');
const app = express();
const authController = require('./controllers/authController.js');
const router = require('./routes/routes.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport-setup');
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/build', express.static(path.resolve(__dirname, '../../build')));
//app.use('/client', express.static(path.resolve(__dirname, '../Client')));
// app.use(express.static('style'));
app.post('/user/signin', authController.validateUser, (req, res) => {
  // res.status(200).json(res.locals.user);
  console.log('made it');
});

app.get('/new', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/signup.html'));
});

app.post('/signup', authController.createUser, (req, res) => {
  console.log('sign up sucessful');
  if (res.locals.info) console.log('user info', res.locals.info);
  // res.status(200).json(res.locals.user);
});

app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/signin.html'));
});

// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json(err);
});

app.use('/routes', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

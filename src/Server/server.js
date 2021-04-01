const express = require('express');
const path = require('path');
const app = express();
const authController = require('./controllers/authController.js');

const paletteRouter = require('./routes/paletteRouter.js');
// const userRouter = require('./routes/userRouter.js');
const authRouter = require('./routes/authRouter.js');
// const cors = require('cors');
const bodyParser = require('body-parser');
// const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport-setup');
// app.use(cors());

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// app.use(bodyParser.json());

// app.use(passport.initialize());
// app.use(passport.session());

const PORT = 8000;

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.use('/build', express.static(path.resolve(__dirname, '../../build')));
app.use('/client', express.static(path.resolve(__dirname, '../Client')));
// app.use(express.static('style'));

app.use('/palette', paletteRouter);
app.use('/auth', authRouter);
// app.use('/user', userRouter);


app.get('/newUser', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/signup.html'));
});


app.get('/home', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});


app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/signin.html'));
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// global error handler
app.use((err, req, res, next) => {
  console.log("Global error", err);
  res.status(500).json(err);
});

module.exports = app;

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
<<<<<<< HEAD
const session = require('express-session');
require('./passport-setup');
=======
// const cookieSession = require('cookie-session');
// require('./passport-setup');
>>>>>>> 10c6c5ff626e35acdd3b4602b8b31a3030f448f4
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

app.use(session({
  secret: 'squirtleSquad',
  resave:false, //Forces the session to be saved back to the session store
  saveUninitialized:false, //
  })
);

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

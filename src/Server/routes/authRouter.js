
const express = require('express');
const path = require('path');
const app = express();
const authController = require('./controllers/authController.js');
const router = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');


// parse application/x-www-form-urlencoded

// parse application/json

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/build', express.static(path.resolve(__dirname, '../../build')));
//app.use('/client', express.static(path.resolve(__dirname, '../Client')));
// app.use(express.static('style'));
app.post('/signin', authController.validateUser, (req, res) => {
  // res.status(200).json(res.locals.user);
  console.log('made it');
});



app.post('/signup', authController.createUser, (req, res) => {
  console.log('sign up sucessful');
  if (res.locals.info) console.log('user info', res.locals.info);
  // res.status(200).json(res.locals.user);
});



// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json(err);
});

app.use('/routes', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

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
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('./passport-setup');

const PORT = 8000;
app.set('view-engine','ejs')
// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.use('/build', express.static(path.resolve(__dirname, '../../build')));
app.use('/client', express.static(path.resolve(__dirname, '../Client')));
// app.use(express.static('style'));

app.use(cookieParser());

// instatiate session
app.use(session({
  secret: 'squirtleSquad',
  resave:false, //Forces the session to be saved back to the session store
  saveUninitialized:false, //Forces a session that is "uninitialized" to be saved to the store. 
  //A session is uninitialized when it is new but not modified.
  })
);
app.get('/logout', (req,res)=>{
  res.clearCookie('email')
  console.log('in the logout!')
  res.status(200).sendFile(path.resolve(__dirname, '../client/signin.html'));
})
app.use('/palette', paletteRouter);
app.use('/auth', authRouter);
// app.use('/user', userRouter);

app.get('/newUser', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/signup.html'));
});

app.get('/home', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
  // res.cookie('userEmail', 'j@j.com').send('cookie set'); // .cookie('email', 'j@j.com')
});

app.get('/', (req, res) => {
  // res.setHeader('Content-type', 'text/html');
  // res.status(200).sendFile(path.resolve(__dirname, '../client/signin.html'));
  res.render('signin.ejs')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// global error handler
app.use((err, req, res, next) => {
  console.log('Global error', err);
  res.status(500).json(err);
});

module.exports = app;

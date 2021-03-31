const express = require('express');
const path = require('path');
const app = express();
const authController = require('./controllers/authController.js');
const router = require('./routes/routes.js')

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/build', express.static(path.resolve(__dirname, '../../build')));
app.use('/client', express.static(path.resolve(__dirname, '../Client')));
// app.use(express.static('style'));
app.get('/signin', authController.validateUser, (req, res) => {
  res.status(200).json(res.locals.user)
});

app.post('/signup', authController.createUser, (req, res) => {
  res.status(200).json(res.locals.user)
})

app.get('/',(req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})

app.get('/login',(req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/signin.html'));
})


app.use('/routes', router)


app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);




// global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json(err);
});
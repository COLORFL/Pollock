const express = require('express');
const path = require('path');
const app = express();

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/build', express.static(path.resolve(__dirname, '../../build')));
app.use('/client', express.static(path.resolve(__dirname, '../Client')));
// app.use(express.static('style'));

app.get('/',(req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})



app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);
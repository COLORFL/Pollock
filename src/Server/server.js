const express = require('express');
const path = require('path');
const app = express();

const PORT = 8000;

app.use(express.json());
app.use(express.static('assets'));

app.get('/',(req, res) => {
  res.setHeader('content-type', 'text/html');
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}`)
);
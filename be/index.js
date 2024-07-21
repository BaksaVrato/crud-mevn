console.log('Running...');

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db/db');
const router = require('./routes/router');
require('dotenv').config();

const app = express();

app.use(cors(), express.json(), router);

app.get('/', (req, res) => {
  res.send('Home');
});

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

connectDB();

mongoose.connection.once('open', () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
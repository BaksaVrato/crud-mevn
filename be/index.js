console.log('Running...');

const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/db');
const router = require('./routes/router');
require('dotenv').config();

const app = express();

app.use(express.json(), router);

app.get('/', (req, res) => {
  res.send('Home');
});

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
});

const PORT = 3000;
connectDB();

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
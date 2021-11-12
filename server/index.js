'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// const router = require('./router');
const db = require('./models/model')

const app = express();

app.use(cors());
app.use(express.json());
// app.use(router);

(async function() {
  try {
    app.listen(process.env.SERVER_PORT, () => {
      console.log('Server is running on Port ' + process.env.SERVER_PORT);
    })
  } catch (error) {
    console.error(error);
  }
})()
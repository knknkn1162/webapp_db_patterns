'use strict'
const express = require('express');
const env = require('./env');
const pgp = require('pg-promise')();

const conn = pgp({
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

// App
var app = express();
app.get('/get', async (req, res) => {
  try {
    const data = await conn.any(`select * from person`);
    res.send(JSON.stringify(data));
  } catch(err) {
    new Error("xxx");
  }
});

app.listen(env.APP_PORT);
console.log('Running on http://localhost:' + env.APP_PORT);
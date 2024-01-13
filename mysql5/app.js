'use strict'
const express = require('express');
const env = require('./env');
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
});

// App
var app = express();
app.get('/get', async (req, res) => {
  conn.query(
    'SELECT * FROM person',
    (err, data) => {
      res.send(JSON.stringify(data));
    }
  );
});

app.listen(env.APP_PORT);
console.log('Running on http://localhost:' + env.APP_PORT);
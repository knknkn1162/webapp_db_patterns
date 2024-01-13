'use strict'
/*
const express = require('express');
const {Client} = require('pg');
const c = new Client()
const app = express();

app.get('/get', (req, res) => {
});
*/

const express = require('express');

// Constants
const PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
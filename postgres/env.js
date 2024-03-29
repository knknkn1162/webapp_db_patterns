require('dotenv').config();

module.exports = {
  DB_PORT:  process.env['DB_PORT'],
  DB_NAME: process.env['DB_NAME'],
  DB_HOST: process.env['DB_HOST'],
  DB_USER: process.env['DB_USER'],
  DB_PASSWORD: process.env['DB_PASSWORD'],
  APP_PORT: process.env['APP_PORT'],
};
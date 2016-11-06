// Update with your config settings.
require('dotenv').config();

module.exports = {
  client: 'postgresql',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  },
  pool: {
    min: 2,
    max: 10
  }
};

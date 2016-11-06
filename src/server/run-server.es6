require('dotenv').config();

require('knex')({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  }
});

const express = require('express');
const app = express();

app.use(express.static('bin/public'));
app.use(express.static('static'));

app.use('/api', require('./server'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

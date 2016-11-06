var express = require('express');
var router = express.Router();

var knex = require('./database-connection');

router.get('/user', (req, res) => {
  knex.select('*').from('users').then((userList) => {
    res.send({userList});
  }).catch((error) => {
    res.send({error});
  });
});

module.exports = router;

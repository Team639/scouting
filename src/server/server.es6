var express = require('express');
var router = express.Router();

router.get('/user', (req, res) => {
  const userList = [
    {id:1, name:'Joe'},
    {id:2, name:'Stacy'}
  ];
  res.send({userList});
});

module.exports = router;

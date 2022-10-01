var express = require('express');
const { getUsers } = require('../services/user-services.js');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = getUsers();
  res.send(users);
});

module.exports = router;

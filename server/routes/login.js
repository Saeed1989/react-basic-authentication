var express = require('express');
const { getLogInPayload } = require('../services/login-service.js');
const { getUsers } = require('../services/user-services.js');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const payload = getLogInPayload();
  res.send(payload);
});

module.exports = router;

var express = require("express");
const { getLogInPayload } = require("../services/login-service.js");
const { getUsers } = require("../services/user-services.js");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  const payload = getLogInPayload(req);
  if (payload) {
    res.status(200).send(payload);
  } else {
    res.status(400).send("Invalid username or password");
  }
});

module.exports = router;

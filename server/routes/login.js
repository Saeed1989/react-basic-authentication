var express = require("express");
const { getLogInPayload } = require("../services/login-service.js");
var router = express.Router();

/* GET users listing. */
router.post("/", async (req, res, next) => {
  //console.log(req.body);
  const payload = await getLogInPayload(req);
  if (payload) {
    res.status(200).send(payload);
  } else {
    res.status(400).send("Invalid username or password");
  }
});

module.exports = router;

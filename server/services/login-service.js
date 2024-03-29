const { getDummyUsers } = require("../constants/dummy-users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getLogInPayload = async (req, res) => {
  //console.log(process.env);
  if (req.body.username && req.body.password) {
    let user = await checkUser(req.body.username, req.body.password);
    console.log(user);
    if (user) {
      var token = jwt.sign(
        {
          id: user._id,
          username: req.body.username,
          exp: Math.floor(Date.now() / 1000) + 3600,
        },
        process.env.JWT_SECRET
      );

      const { passwordHash, ...rest } = user;

      const payload = {
        status: "ok",
        type: "account",
        currentAuthority: rest.roleName,
        firstName: rest.firstName,
        lastName: rest.lastName,
        user: rest,
        accessToken: token,
      };

      return payload;
    }
  }

  return undefined;
};

const checkUser = async (username, password) => {
  const user = getDummyUsers().find((usr) => usr.username === username);
  console.log(user);
  if (user) {
    const match = await bcrypt.compare(password, user.passwordHash);
    return match ? user : undefined;
  }

  return undefined;
};

module.exports = { getLogInPayload };

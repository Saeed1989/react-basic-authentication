const bcrypt = require("bcrypt");
const { getDummyUsers } = require("../constants/dummy-users");

const checkUser = async (username, password) => {
  let user = getDummyUsers.find((user) => user.username === username);

  if (user) {
    const match = await bcrypt.compare(password, user.passwordHash);
    return match ? UserViewModel.convert(user) : undefined;
  }

  return undefined;
};

module.exports = { checkUser };

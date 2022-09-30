import { DUMMY_USERS } from "../constants/dummy-users";

const bcrypt = require("bcrypt");

const checkUser = async (username, password) => {
    let user = DUMMY_USERS.find(user => user.username === username);

    if (user) {
      const match = await bcrypt.compare(password, user.passwordHash);
      return match ? UserViewModel.convert(user) : undefined;
    }
  
    return undefined;
  };

  module.exports = { checkUser };
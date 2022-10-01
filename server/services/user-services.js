const { getDummyUsers } = require("../constants/dummy-users");

const getUsers = () => {
    return getDummyUsers();
}

module.exports = { getUsers };
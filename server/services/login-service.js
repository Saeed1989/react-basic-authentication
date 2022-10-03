const { getDummyUsers } = require("../constants/dummy-users");
const jwt = require("jsonwebtoken");

const  getLogInPayload= () => {
    return { mst: "dummy payload"}
}

module.exports = { getLogInPayload };
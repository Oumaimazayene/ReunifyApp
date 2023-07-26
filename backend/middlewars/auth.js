const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

function checkAuthorization(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access rejected.");
  }
  try {
    const decodedToken = jwt.verify(token, "privatekey");
    req.User = decodedToken;
    if (req.User.role !== "admin" && req.User.role !== "employee") {
      return res.status(403).send("You are not authorized.");
    }
    next();
  } catch (e) {
    res.status(400).send("Invalid token.");
  }
}

module.exports = checkAuthorization;

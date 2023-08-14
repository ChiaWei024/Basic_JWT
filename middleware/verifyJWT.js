// JWT
const jwt = require("jsonwebtoken");
// env
require("dotenv").config();

//
const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  if (!authHeader) {
    return res.sendStatus(401);
  }
  // authHeader: expect to see: bearer token
  console.log(authHeader);

  // verify token
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      // invalid token
      return res.sendStatus(403);
    }
    req.user = decoded.username;
    next();
  });
};

//
module.exports = verifyJWT;

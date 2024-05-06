const jwt = require("jsonwebtoken");
const config = require("../config/jwt");

exports.verifyToken = function (req, res, next) {
  const token = req.headers.authorization;

  // Check if token is provided
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  // Verify token
  jwt.verify(token.split(" ")[1], config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    // Attach decoded token to request object
    req.decoded = decoded;
    next();
  });
};

const jwt = require("jsonwebtoken");

const secrets = require("./secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: "error in credentials" });
      } else {
        req.decodedTokenJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ error: "no street cred" });
  }
};

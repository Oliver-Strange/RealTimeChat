const jwt = require("jsonwebtoken");

const secrets = require("./secret");

module.exports = {
  generateToken
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "12h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

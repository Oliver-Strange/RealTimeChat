// exports the json web token secret

module.exports = {
  jwtSecret: process.env.JWT_SECRET || "this isn't as safe"
};

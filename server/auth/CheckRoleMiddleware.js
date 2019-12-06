// checks role for for eventual implementation of user permissions
module.exports = role => {
  return function(req, res, next) {
    if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
      next();
    } else {
      res.status(403).json({ error: "you don't have access" });
    }
  };
};

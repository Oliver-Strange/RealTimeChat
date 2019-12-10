const db = require("../../db/dbConfig");

module.exports = {
  getAllUsers,
  getUserByID,
  addUser,
  updateUser,
  removeUser
};

function getAllUsers() {
  return db("users").select("id", "username");
}

function getUserByID(id) {
  return db("users")
    .where({ id })
    .first();
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      const [id] = ids;

      return db("users").where({ id }).first;
    });
}

function updateUser(id, changes) {
  return db("users")
    .where({ id })
    .update(changes)
    .then(() => {
      return db("users")
        .where({ id })
        .first();
    });
}

function removeUser(id) {
  return db("users")
    .where({ id })
    .del();
}

const db = require("../../db/dbConfig");

module.exports = {
  getAllUsers,
  getUserByID,
  findBy,
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

function findBy(filter) {
  return db("users").where(filter);
}

async function addUser(user) {
  const [id] = await db("users").insert(user);

  return getUserByID(id);
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

const db = require("../../db/dbConfig");

module.exports = {
  getAllChannels,
  getChannelByID,
  addChannel,
  updateChannel,
  removeChannel
};

function getAllChannels() {
  return db("channels").select("id", "name");
}

function getChannelByID(id) {
  return db("channels")
    .where({ id })
    .first();
}

function addChannel(channel) {
  return db("channels")
    .insert(channel)
    .then(ids => {
      const [id] = ids;

      return db("channels")
        .where({ id })
        .first();
    });
}

function updateChannel(id, changes) {
  return db("channels")
    .where({ id })
    .update(changes)
    .then(() => {
      return db("channels")
        .where({ id })
        .first();
    });
}

function removeChannel(id) {
  return db("channels")
    .where({ id })
    .del();
}

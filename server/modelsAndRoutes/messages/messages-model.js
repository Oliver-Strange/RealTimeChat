const db = require("../../db/dbConfig");

module.exports = {
  getAllPrivateUserMessages,
  addUserMessage,
  updateUserMessage,
  removeUserMessage
};

function getLastFiftyMessages() {
  /*
  return messages
    where channel_id 
  */
}

function addUserMessage(message) {
  return db("messages").insert(message);
}

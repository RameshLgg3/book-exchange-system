const db = require("../config/db");

const Message = {
  getAllMessages: function (callback) {
    return db.query("SELECT * FROM messages", callback);
  },
  getMessageById: function (id, callback) {
    return db.query("SELECT * FROM messages WHERE id = ?", [id], callback);
  },
  createMessage: function (newMessage, callback) {
    const { exchange_request_id, user_id, comments } = newMessage;
    return db.query(
      "INSERT INTO messages (exchange_request_id, user_id, comments) VALUES (?, ?, ?)",
      [exchange_request_id, user_id, comments],
      callback
    );
  },
  deleteMessage: function (id, callback) {
    return db.query("DELETE FROM messages WHERE id = ?", [id], callback);
  },
};

module.exports = Message;

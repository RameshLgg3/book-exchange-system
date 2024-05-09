const db = require("../config/db");

const ExchangeRequest = {
  getAllExchangeRequests: function (callback) {
    return db.query("SELECT * FROM exchange_requests", callback);
  },
  getExchangeRequestById: function (id, callback) {
    return db.query(
      "SELECT * FROM exchange_requests WHERE id = ?",
      [id],
      callback
    );
  },
  createExchangeRequest: function (newExchangeRequest, callback) {
    const {
      book_id,
      user_id,
      request_type,
      delivery_method,
      duration,
      comments,
      status,
    } = newExchangeRequest;
    return db.query(
      "INSERT INTO exchange_requests (book_id, user_id, request_type, delivery_method, duration, comments, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        book_id,
        user_id,
        request_type,
        delivery_method,
        duration,
        comments,
        status,
      ],
      callback
    );
  },
  updateExchangeRequest: function (id, updatedExchangeRequest, callback) {
    const {
      book_id,
      user_id,
      request_type,
      delivery_method,
      duration,
      comments,
      status,
    } = updatedExchangeRequest;
    return db.query(
      "UPDATE exchange_requests SET book_id = ?, user_id = ?, request_type = ?, delivery_method = ?, duration = ?, comments = ?, status = ? WHERE id = ?",
      [
        book_id,
        user_id,
        request_type,
        delivery_method,
        duration,
        comments,
        status,
        id,
      ],
      callback
    );
  },
  deleteExchangeRequest: function (id, callback) {
    return db.query(
      "DELETE FROM exchange_requests WHERE id = ?",
      [id],
      callback
    );
  },
  getTransactions: function (userId, status, callback) {
    return db.query(
      "SELECT * FROM exchange_requests WHERE user_id = ? and status = ?",
      [userId, status],
      callback
    );
  },
};

module.exports = ExchangeRequest;

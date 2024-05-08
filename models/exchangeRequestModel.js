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
      title,
      description,
      author,
      genre,
      exchange_request_condition,
      availability_status,
      exchange_request_type,
      image_url,
    } = updatedExchangeRequest;
    return db.query(
      "UPDATE exchange_requests SET title = ?, description = ?, author = ?, genre = ?, book_condition = ?, availability_status = ?, book_type = ?, image_url = ? WHERE id = ?",
      [
        title,
        description,
        author,
        genre,
        book_condition,
        availability_status,
        book_type,
        image_url,
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
};

module.exports = ExchangeRequest;

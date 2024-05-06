const db = require("../config/db");

const Book = {
  getAllBooks: function (callback) {
    return db.query("SELECT * FROM books", callback);
  },
  getBookById: function (id, callback) {
    return db.query("SELECT * FROM books WHERE id = ?", [id], callback);
  },
  createBook: function (newBook, callback) {
    return db.query("INSERT INTO books SET ?", newBook, callback);
  },
  updateBook: function (id, updatedBook, callback) {
    return db.query(
      "UPDATE books SET ? WHERE id = ?",
      [updatedBook, id],
      callback
    );
  },
  deleteBook: function (id, callback) {
    return db.query("DELETE FROM books WHERE id = ?", [id], callback);
  },
};

module.exports = Book;

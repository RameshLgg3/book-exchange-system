const db = require("../config/db");

const Book = {
  getAllBooks: function (callback) {
    return db.query("SELECT * FROM books", callback);
  },
  getBookById: function (id, callback) {
    return db.query("SELECT * FROM books WHERE id = ?", [id], callback);
  },
  createBook: function (newBook, callback) {
    const {
      user_id,
      title,
      description,
      author,
      genre,
      book_condition,
      availability_status,
      book_type,
    } = newBook;
    return db.query(
      "INSERT INTO books (user_id, title, description, author, genre, book_condition, availability_status, book_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user_id,
        title,
        description,
        author,
        genre,
        book_condition,
        availability_status,
        book_type,
      ],
      callback
    );
  },
  updateBook: function (id, updatedBook, callback) {
    const {
      title,
      description,
      author,
      genre,
      book_condition,
      availability_status,
      book_type,
    } = updatedBook;
    return db.query(
      "UPDATE books SET title = ?, description = ?, author = ?, genre = ?, book_condition = ?, availability_status = ?, book_type = ? WHERE id = ?",
      [
        title,
        description,
        author,
        genre,
        book_condition,
        availability_status,
        book_type,
        id,
      ],
      callback
    );
  },
  deleteBook: function (id, callback) {
    return db.query("DELETE FROM books WHERE id = ?", [id], callback);
  },
};

module.exports = Book;

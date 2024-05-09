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
      image_url,
    } = newBook;
    return db.query(
      "INSERT INTO books (user_id, title, description, author, genre, book_condition, availability_status, book_type, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user_id,
        title,
        description,
        author,
        genre,
        book_condition,
        availability_status,
        book_type,
        image_url,
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
      image_url,
    } = updatedBook;
    return db.query(
      "UPDATE books SET title = ?, description = ?, author = ?, genre = ?, book_condition = ?, availability_status = ?, book_type = ?, image_url = ? WHERE id = ?",
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
  deleteBook: function (id, callback) {
    return db.query("DELETE FROM books WHERE id = ?", [id], callback);
  },
  searchBooks: function (searchCriteria, callback) {
    const { title, description, author, genre } = searchCriteria;
    return db.query(
      "SELECT * FROM books where id = 1",
      [title, description, author, genre],
      callback
    );
  },
};

module.exports = Book;

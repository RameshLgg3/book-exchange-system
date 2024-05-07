const Book = require("../models/bookModel");

exports.getAllBooks = function (req, res) {
  Book.getAllBooks((err, books) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json(books);
  });
};

exports.createBook = function (req, res) {
  const {
    user_id,
    title,
    description,
    author,
    genre,
    book_condition,
    availability_status,
    book_type,
  } = req.body;

  const newBook = {
    user_id: user_id,
    title: title,
    description: description,
    author: author,
    genre: genre,
    book_condition: book_condition,
    availability_status: availability_status,
    book_type: book_type,
  };

  Book.createBook(newBook, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    res
      .status(201)
      .json({ message: "Book created successfully", id: result.insertId });
  });
};

exports.getBookById = function (req, res) {
  const bookId = req.params.id;

  Book.getBookById(bookId, (err, book) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  });
};

exports.updateBook = function (req, res) {
  const bookId = req.params.id;
  const {
    title,
    description,
    author,
    genre,
    book_condition,
    availability_status,
    book_type,
  } = req.body;

  const updatedBook = {
    title: title,
    description: description,
    author: author,
    genre: genre,
    book_condition: book_condition,
    availability_status: availability_status,
    book_type: book_type,
  };

  Book.updateBook(bookId, updatedBook, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully" });
  });
};

exports.deleteBook = function (req, res) {
  const bookId = req.params.id;

  Book.deleteBook(bookId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  });
};

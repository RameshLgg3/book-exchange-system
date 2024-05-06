const Book = require("../models/bookModel");

exports.getAllBooks = function (req, res) {
  Book.getAllBooks((err, books) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json(books);
  });
};

exports.getBookById = function (req, res) {
  // Implement logic to fetch an book by ID
};

exports.createBook = function (req, res) {
  Book.createBook = function (req, res) {
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

    // Check if all required fields are provided
    if (!user_id || !title || !author) {
      return res
        .status(400)
        .json({ message: "User ID, title, and author are required fields" });
    }

    // Save book to database
    db.query(
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
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Internal server error" });
        }
        res
          .status(201)
          .json({ message: "Book created successfully", id: result.insertId });
      }
    );
  };
};

exports.updateBook = function (req, res) {
  // Implement logic to update an book by ID
};

exports.deleteBook = function (req, res) {
  // Implement logic to delete an book by ID
};

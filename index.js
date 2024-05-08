const express = require("express");
const bodyParser = require("body-parser");
const authController = require("./controllers/authController");
const bookController = require("./controllers/bookController");
const authMiddleware = require("./middlewares/authMiddleware");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Authentication Routes
app.post("/api/login", authController.login);
app.post("/api/register", authController.register); // New registration route

// Book Routes (protected)
app.get("/api/books", authMiddleware.verifyToken, bookController.getAllBooks);
app.get(
  "/api/books/:id",
  authMiddleware.verifyToken,
  bookController.getBookById
);
app.post("/api/books", authMiddleware.verifyToken, bookController.createBook);
app.put(
  "/api/books/:id",
  authMiddleware.verifyToken,
  bookController.updateBook
);
app.delete(
  "/api/books/:id",
  authMiddleware.verifyToken,
  bookController.deleteBook
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

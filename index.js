const express = require("express");
const bodyParser = require("body-parser");
const authController = require("./controllers/authController");
const bookController = require("./controllers/bookController");
const authMiddleware = require("./middlewares/authMiddleware");
const exchangeRequestController = require("./controllers/exchangeRequestController");

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

// Exchange requests Routes (protected)
app.get(
  "/api/exchange-requests",
  authMiddleware.verifyToken,
  exchangeRequestController.getAllExchangeRequests
);
app.get(
  "/api/exchange-requests/:id",
  authMiddleware.verifyToken,
  exchangeRequestController.getExchangeRequestById
);
app.post(
  "/api/exchange-requests",
  authMiddleware.verifyToken,
  exchangeRequestController.createExchangeRequest
);
app.put(
  "/api/exchange-requests/:id",
  authMiddleware.verifyToken,
  exchangeRequestController.updateExchangeRequest
);
app.delete(
  "/api/exchange-requests/:id",
  authMiddleware.verifyToken,
  exchangeRequestController.deleteExchangeRequest
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

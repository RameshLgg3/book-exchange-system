const ExchangeRequest = require("../models/exchangeRequestModel");

exports.getAllExchangeRequests = function (req, res) {
  ExchangeRequest.getAllExchangeRequests((err, exchange_requests) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json(exchange_requests);
  });
};

exports.createExchangeRequest = function (req, res) {
  const {
    book_id,
    user_id,
    request_type,
    delivery_method,
    duration,
    comments,
    status,
  } = req.body;

  const newExchangeRequest = {
    book_id: book_id,
    user_id: user_id,
    request_type: request_type,
    delivery_method: delivery_method,
    duration: duration,
    comments: comments,
    status: status,
  };

  ExchangeRequest.createExchangeRequest(newExchangeRequest, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" + err });
    }
    res.status(201).json({
      message: "ExchangeRequest created successfully",
      id: result.insertId,
    });
  });
};

exports.getExchangeRequestById = function (req, res) {
  const bookId = req.params.id;

  ExchangeRequest.getExchangeRequestById(bookId, (err, book) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!book) {
      return res.status(404).json({ message: "ExchangeRequest not found" });
    }
    res.status(200).json(book);
  });
};

exports.updateExchangeRequest = function (req, res) {
  const bookId = req.params.id;
  const {
    title,
    description,
    author,
    genre,
    book_condition,
    availability_status,
    book_type,
    image_url,
  } = req.body;

  const updatedExchangeRequest = {
    title: title,
    description: description,
    author: author,
    genre: genre,
    book_condition: book_condition,
    availability_status: availability_status,
    book_type: book_type,
    image_url: image_url,
  };

  ExchangeRequest.updateExchangeRequest(
    bookId,
    updatedExchangeRequest,
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (!result) {
        return res.status(404).json({ message: "ExchangeRequest not found" });
      }
      res.status(200).json({ message: "ExchangeRequest updated successfully" });
    }
  );
};

exports.deleteExchangeRequest = function (req, res) {
  const bookId = req.params.id;

  ExchangeRequest.deleteExchangeRequest(bookId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" + err });
    }
    if (!result) {
      return res.status(404).json({ message: "ExchangeRequest not found" });
    }
    res.status(200).json({ message: "ExchangeRequest deleted successfully" });
  });
};

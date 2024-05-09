const Message = require("../models/messageModel");

exports.getAllMessages = function (req, res) {
  Message.getAllMessages((err, messages) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json(messages);
  });
};

exports.createMessage = function (req, res) {
  const { exchange_request_id, user_id, comments } = req.body;

  const newMessage = {
    exchange_request_id: exchange_request_id,
    user_id: user_id,
    comments: comments,
  };

  Message.createMessage(newMessage, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" + err });
    }
    res
      .status(201)
      .json({ message: "Message created successfully", id: result.insertId });
  });
};

exports.getMessageById = function (req, res) {
  const messageId = req.params.id;

  Message.getMessageById(messageId, (err, message) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json(message);
  });
};

exports.deleteMessage = function (req, res) {
  const messageId = req.params.id;

  Message.deleteMessage(messageId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" + err });
    }
    if (!result) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json({ message: "Message deleted successfully" });
  });
};

exports.searchMessages = function (req, res) {
  const { title, description, author, genre } = req.body;

  const searchCriteria = {
    title: title,
    description: description,
    author: author,
    genre: genre,
  };

  Message.searchMessages(searchCriteria, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" + err });
    }
    res.status(200).json({ messages: result });
  });
};

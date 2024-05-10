const UserProfile = require("../models/userProfileModel");

exports.getAllUserProfiles = function (req, res) {
  UserProfile.getAllUserProfiles((err, userProfiles) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json(userProfiles);
  });
};

exports.createUserProfile = function (req, res) {
  const {
    user_id,
    reading_preferences,
    favorite_genres,
    books_currently_own,
    books_wish_to_acquire,
  } = req.body;

  const newUserProfile = {
    user_id: user_id,
    reading_preferences: reading_preferences,
    favorite_genres: favorite_genres,
    books_currently_own: books_currently_own,
    books_wish_to_acquire: books_wish_to_acquire,
  };

  UserProfile.createUserProfile(newUserProfile, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" + err });
    }
    res.status(201).json({
      message: "UserProfile created successfully",
      id: result.insertId,
    });
  });
};

exports.getUserProfileById = function (req, res) {
  const bookId = req.params.id;

  UserProfile.getUserProfileById(bookId, (err, book) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!book) {
      return res.status(404).json({ message: "UserProfile not found" });
    }
    res.status(200).json(book);
  });
};

exports.updateUserProfile = function (req, res) {
  const bookId = req.params.id;
  const {
    reading_preferences,
    favorite_genres,
    books_currently_own,
    books_wish_to_acquire,
  } = req.body;

  const updatedUserProfile = {
    reading_preferences: reading_preferences,
    favorite_genres: favorite_genres,
    books_currently_own: books_currently_own,
    books_wish_to_acquire: books_wish_to_acquire,
  };

  UserProfile.updateUserProfile(bookId, updatedUserProfile, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" + err });
    }
    if (!result) {
      return res.status(404).json({ message: "UserProfile not found" });
    }
    res.status(200).json({ message: "UserProfile updated successfully" });
  });
};

exports.deleteUserProfile = function (req, res) {
  const bookId = req.params.id;

  UserProfile.deleteUserProfile(bookId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" + err });
    }
    if (!result) {
      return res.status(404).json({ message: "UserProfile not found" });
    }
    res.status(200).json({ message: "UserProfile deleted successfully" });
  });
};

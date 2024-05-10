const db = require("../config/db");

const UserProfile = {
  getAllUserProfiles: function (callback) {
    return db.query("SELECT * FROM user_profiles", callback);
  },
  getUserProfileById: function (id, callback) {
    return db.query("SELECT * FROM user_profiles WHERE id = ?", [id], callback);
  },
  createUserProfile: function (newUserProfile, callback) {
    const {
      user_id,
      reading_preferences,
      favorite_genres,
      books_currently_own,
      books_wish_to_acquire,
    } = newUserProfile;
    return db.query(
      "INSERT INTO user_profiles (user_id, reading_preferences, favorite_genres, books_currently_own, books_wish_to_acquire) VALUES (?, ?, ?, ?, ?)",
      [
        user_id,
        reading_preferences,
        favorite_genres,
        books_currently_own,
        books_wish_to_acquire,
      ],
      callback
    );
  },
  updateUserProfile: function (id, updatedUserProfile, callback) {
    const {
      reading_preferences,
      favorite_genres,
      books_currently_own,
      books_wish_to_acquire,
    } = updatedUserProfile;
    return db.query(
      "UPDATE user_profiles SET reading_preferences = ?, favorite_genres = ?, books_currently_own = ?, books_wish_to_acquire = ? WHERE id = ?",
      [
        reading_preferences,
        favorite_genres,
        books_currently_own,
        books_wish_to_acquire,
        id,
      ],
      callback
    );
  },
  deleteUserProfile: function (id, callback) {
    return db.query("DELETE FROM user_profiles WHERE id = ?", [id], callback);
  },
};

module.exports = UserProfile;

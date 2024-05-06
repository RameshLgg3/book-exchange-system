const mysql = require("mysql");

// MySQL Connection Pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Rams2000*",
  database: "book_exchange_system",
});

module.exports = pool;

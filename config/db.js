const mysql = require("mysql");

// MySQL Connection Pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "sql212.infinityfree.com",
  user: "if0_36492116",
  password: "bookExchange",
  database: "if0_36492116_book_exchange",
});

module.exports = pool;

const mysql = require("mysql");

// MySQL Connection Pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cluster-east-01.k8s.cleardb.net",
  user: "b091f7e174473a",
  password: "7b5f16c8",
  database: "heroku_32d881b5a14dd64",
});

module.exports = pool;

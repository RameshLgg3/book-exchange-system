const mysql = require("mysql");

// MySQL Connection Pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "wyqk6x041tfxg39e.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  user: "sqs2rk2ftgbtdbj9",
  password: "xh9xxv7r2yp86t8h",
  database: "ssaitl81d5snicpm",
});

module.exports = pool;

const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5434,
  database: "fs16",
  user: "postgres",
  password: "123",
});

module.exports = { pool };

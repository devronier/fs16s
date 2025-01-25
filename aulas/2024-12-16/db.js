const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  port: "5434",
  user: "postgres",
  database: "fs16",
  password: "123",
});

module.exports = { pool };

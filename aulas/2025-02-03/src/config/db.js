const { Pool } = require("pg");

const pool = new Pool({
  user: "ronierlima",
  host: "ep-hidden-lake-004674-pooler.us-east-2.aws.neon.tech",
  database: "digital_links",
  password: "uYT74kfKhJbF",
  ssl: true,
});

module.exports = { pool };

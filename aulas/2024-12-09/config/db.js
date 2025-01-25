const pg = require("pg")

//const Client = pg.Client
const { Pool } = pg

const pool = new Pool({
    user: "postgres",
    password: "123",
    host: "localhost",
    port: "5434",
    database: "fs16",
    max: 20
})


module.exports = { pool }
const { pool } = require("../config/db")

async function buscarLeituras() {
    const result = await pool.query('SELECT * from leituras')
    console.log(result.rows)
}

module.exports = {buscarLeituras}
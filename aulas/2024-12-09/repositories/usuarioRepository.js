const { pool } = require("../config/db")

async function buscarUsuarios() {
    const result = await pool.query('SELECT * from usuarios')
    console.log(result.rows)
}

module.exports = {buscarUsuarios}
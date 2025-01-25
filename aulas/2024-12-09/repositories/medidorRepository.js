const { pool } = require("../config/db")

async function buscarMedidores() {
    const result = await pool.query('SELECT * from medidores')
    console.log(result.rows)
}

module.exports = {buscarMedidores}
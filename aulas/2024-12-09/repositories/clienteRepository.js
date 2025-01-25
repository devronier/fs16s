const { pool } = require("../config/db")

async function buscarClientes() {
    const result = await pool.query('SELECT * from clientes')
    console.log(result.rows)
}

module.exports = {buscarClientes}
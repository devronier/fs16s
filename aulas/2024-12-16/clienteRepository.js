const { pool } = require("./db");

async function buscarClientes() {
  const resultado = await pool.query("select * from clientes");

  return resultado.rows;
}

module.exports = { buscarClientes };

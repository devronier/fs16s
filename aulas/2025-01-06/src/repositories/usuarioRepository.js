const { pool } = require("../config/db");

async function buscarUsuarios() {
  const resposta = await pool.query("select * from usuarios");

  return resposta.rows;
}

module.exports = { buscarUsuarios };

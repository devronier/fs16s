const { pool } = require("../config/db");

async function buscarLinks() {
  const resposta = await pool.query("select * from links");

  return resposta.rows;
}

module.exports = { buscarLinks };

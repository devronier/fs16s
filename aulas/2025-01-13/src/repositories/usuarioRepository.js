const { pool } = require("../config/db");

async function buscarUsuarios() {
  const resposta = await pool.query("SELECT * FROM usuarios");

  return resposta.rows;
}

async function criarUsuario(usuario) {
  const resposta = await pool.query(
    `INSERT INTO usuarios 
        (login, email, senha) VALUES ('${usuario.login}', '${usuario.email}', '${usuario.senha}')`
  );

  return resposta.rows;
}

module.exports = { buscarUsuarios, criarUsuario };

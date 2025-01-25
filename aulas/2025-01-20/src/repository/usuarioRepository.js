const { usuarios } = require("../db/usuarios");

function listarUsuarios() {
  return usuarios;
}

module.exports = { listarUsuarios };

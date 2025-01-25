const { listarUsuarios } = require("../repository/usuarioRepository");

function buscarUsuarios(req, res) {
  const usuarios = listarUsuarios();

  usuarios.forEach((element) => {
    delete element.senha;
  });

  res.send(usuarios);
}

module.exports = { buscarUsuarios };

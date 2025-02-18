const express = require("express");
const bcrypt = require("bcrypt");

const {
  buscarUsuarios,
  buscarUsuarioPorUsername,
  criarUsuario,
} = require("./src/repository/usuarioRepository");
const {
  buscarLinks,
  buscarLinksPeloUsuario,
} = require("./src/repository/linkRepository");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/login", async (req, res) => {
  const { username, password } = req.query;

  if (!username || !password) {
    res.send(401);
  }

  const usuario = await buscarUsuarioPorUsername(username);

  if (!usuario) {
    res.send(401);
  }

  const resultado = await bcrypt.compare(password, usuario.password);

  if (resultado) {
    res.send("autorizado");
  } else {
    res.send(401);
  }
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await buscarUsuarios();
  res.send(usuarios);
});

app.post("/usuarios", async (req, res) => {
  const usuario = req.body;

  if (!usuario.username || !usuario.password || !usuario.name) {
    return res
      .status(400)
      .json({ message: "Username e senha são obrigatórios." });
  }

  usuario.password = await bcrypt.hash(usuario.password, 12);

  const usuarioSalvo = await criarUsuario(usuario);
  res.send(usuarioSalvo);
});

app.get("/usuarios/:id/links", async (req, res) => {
  const id = Number(req.params.id);
  const links = await buscarLinksPeloUsuario(id);
  res.send(links);
});

app.get("/links", async (req, res) => {
  const links = await buscarLinks();
  res.send(links);
});

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`);
});

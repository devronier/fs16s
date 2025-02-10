const express = require("express");
const { pool } = require("./src/config/db");
const { buscarUsuarios } = require("./src/repository/usuarioRepository");
const {
  buscarLinks,
  buscarLinksPeloUsuario,
} = require("./src/repository/linkRepository");

const app = express();
const port = 3000;

app.get("/usuarios", async (req, res) => {
  const usuarios = await buscarUsuarios();
  res.send(usuarios);
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

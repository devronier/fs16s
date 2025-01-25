const express = require("express");
const { pool } = require("./config/db");
const {
  buscarUsuarios,
  criarUsuario,
} = require("./repositories/usuarioRepository");

const app = express();

app.use(express.json());

// GET POST PUT DELETE

app.get("/", (request, response) => {
  request.url;

  response.send(request.query);
});

app.get("/usuarios", async (req, res) => {
  const resposta = await buscarUsuarios();

  res.send(resposta);
});

app.post("/usuarios", async (request, response) => {
  if (!request.body.login || !request.body.email || !request.body.senha) {
    response.status(400).send({ message: "Faltou informar algum campo" });
  }

  await criarUsuario(request.body);

  response.send(request.body);
});

app.get("/links", async (req, res) => {
  const resposta = await pool.query("SELECT * FROM links");

  res.send(resposta.rows);
});

app.listen(3003, () => {
  console.log(`App de exemplo esta rodando na porta ${3003}`);
});

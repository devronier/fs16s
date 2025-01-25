require("dotenv").config();
const http = require("http");

const {
  buscarUsuarios,
  buscarLinks,
} = require("./repositories/linkRepository");

const server = http.createServer(async (req, res) => {
  let texto = "Hello world!";

  if (req.url == "/usuarios") {
    const usuarios = await buscarUsuarios();
    texto = JSON.stringify(usuarios);
  } else if (req.url == "/links") {
    const links = await buscarLinks();
    texto = JSON.stringify(links);
  }

  res.end(texto);
});

server.listen(3003, () => {
  console.log("estou rodando");
});

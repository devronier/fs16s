const express = require("express");
const { usuarioRouter } = require("./routes/usuarioRoute");

const server = express();
const port = 3000;

server.use(usuarioRouter);

server.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

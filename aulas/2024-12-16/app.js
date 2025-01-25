const http = require("http");
const { buscarClientes } = require("./clienteRepository");

const server = http.createServer(async (requisicao, resposta) => {
  console.log(requisicao.headers);
  const resultado = await buscarClientes();

  resposta.end(JSON.stringify(resultado));
});

server.listen(8080);

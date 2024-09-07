let frutas;

frutas = [];

function adicionarFruta() {
  let novaFruta;
  novaFruta = prompt("Poderia informar uma fruta");

  novaFruta = "<li>" + novaFruta + "</li>";

  frutas.push(novaFruta);
  atualizarListaFrutas();
}

function atualizarListaFrutas() {
  let listaUL = document.getElementById("lista");

  listaUL.innerHTML = "";

  for (let posicao = 0; posicao < frutas.length; posicao++) {
    listaUL.innerHTML += frutas[posicao];
  }
}

function apagarUltimo() {
  frutas.pop();
  atualizarListaFrutas();
}

function apagarPrimeiro() {
  frutas.shift();
  atualizarListaFrutas();
}

atualizarListaFrutas();

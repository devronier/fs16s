function realizarSaudacao() {
  alert("Olá, Pessoal!");
}

function perguntarNomeEMostrar() {
  let nome = prompt("Qual teu vulgo?");

  alert(nome);
}

function somar(primeiro, segundo) {
  let soma = Number(primeiro) + Number(segundo);

  return soma;
}

function perguntarDoisNumerosESomar() {
  let primeiro = prompt("digite");
  let segundo = prompt("digite");

  let soma = somar(primeiro, segundo);

  alert(soma);
}

function adicionarSaldo(valor) {
  let saldo = 1000;

  saldo = somar(saldo, valor);

  alert(saldo);
}

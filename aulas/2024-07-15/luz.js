function mudarCor() {
  let cor = prompt("digite a cor");
  let body = window.document.body;

  body.style.background = cor;
}

function mudarCorH1() {
  let h1 = window.document.getElementById("titulo");

  h1.style.background = "red";
}

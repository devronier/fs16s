let energia = confirm("Tem energia ?");

let luz = document.getElementById("luz");

if (energia) {
  luz.style.backgroundColor = "yellow";
  alert("Estou ligando a luz!");
} else {
  alert("Eu não consigo enxergar");
  luz.style.backgroundColor = "black";
}

//alert(!dia);
// alert(dia && energia);
// alert(dia || energia);

// if (dia) {
//   alert("É Dia !");
// }

// let nome;
// alert(nome);

// nome = prompt("Qual o seu nome?");

// alert(nome);

// let retorno;
// retorno = confirm("tem energia ai ?");

// alert("Estou ligando a luz!");

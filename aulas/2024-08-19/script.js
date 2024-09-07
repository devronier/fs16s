class Produto {
  constructor(marca, modelo, preco) {
    this.marca = marca;
    this.modelo = modelo;
    this.preco = preco;
  }
}

const produto1 = new Produto("Samsung", "Galaxy S21", 3999.99);
const produto2 = new Produto("Dell", "Galaxy S21", 3999.99);
const produto3 = new Produto("Sony", "PlayStation 5", 4499.99);
const produto4 = new Produto("Apple", "iPhone 13", 4999.99);

const lista = [produto1, produto2, produto3, produto4];

let produtosLista = document.getElementById("produtos");
let produtosTabela = document.getElementById("produtosTabela");

function transformarProdutoEmLi(produto) {
  return "<li>" + produto.modelo + "</li>";
}

function transformarProdutoEmTr(produto) {
  const tdModelo = "<td>" + produto.modelo + "</td>";
  const tdMarca = "<td>" + produto.marca + "</td>";
  const tdPreco = "<td>" + produto.preco + "</td>";

  return "<tr>" + tdMarca + tdModelo + tdPreco + "</tr>";
}

for (const produto of lista) {
  produtosLista.innerHTML += transformarProdutoEmLi(produto);
}

for (const produto of lista) {
  produtosTabela.innerHTML += transformarProdutoEmTr(produto);
}

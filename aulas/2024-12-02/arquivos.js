// Importa o modulo
const fs = require("fs")

//Ler e Escrever em arquivos

// Lê uma arquivo, 
const json = fs.readFileSync("db.json", {encoding: "utf-8"})

const lista = JSON.parse(json)

lista.push("Abacate")
lista.push("Banana")

const texto = JSON.stringify(lista)

fs.writeFileSync("db.json", texto)

fs.appendFileSync("index.html", "<h2>TESTE</h2>")

console.log(json)
console.log(lista)
## Introdução a CSS (Cascading Style Sheets)

CSS (Cascading Style Sheets) ou "Folha de Estilo em Cascata", é uma linguagem de estilo usada para definir a apresentação visual de documentos HTML. O termo "cascata" refere-se à forma como as regras de estilo são aplicadas no documento, respeitando uma hierarquia que define quais estilos têm prioridade. Com CSS, é possível controlar aspectos como cores, fontes, espaçamentos, e layout de diversos elementos, como textos, imagens e tabelas. Essa separação entre conteúdo (HTML) e estilo (CSS) simplifica a manutenção e a personalização das páginas web.

### Primeiros passos com CSS.

Inicialmente iremos criar um arquivo HTML, para que possamos estiliza-lo. Dentro desse documento, iremos definir um elemento do tipo título com o seguinte conteudo: “FS16 - Aula 7”
```
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aula 7</title>
</head>

<body>
	<main>
		<h1>FS16 - Aula 7</h1>
	</main>
</body>

</html> 
```
Agora imagine que nossa missão é fazer com que esse titulo  **`<h1></h1>`** , fique na cor vermelha, e que sua cor de fundo seja preta.

Para isso, vamos criar um arquivo ***style.css***, e dentro dele iremos selecionar o elemento que queremos estilizar, e definir qual estilo queremos aplicar nele, em nosso exemplo, vamos precicar alterar a cor do texto e a cor do fundo do elemento.
```
h1 {
	color: red;
	background-color: black;
}
```
Feito isso, você poderá observar que nada aconteceu com nosso documento HTML, ele ainda continua exatamente da mesma forma. Bem isso acontece porque, para que as estilizações sejam lidas e aplicadas aquela página pelo navegador, precisamos ligar, ou linkar, o nosso documento HTML, com nosso arquivo CSS.

Para isso, vamos definir um link, no *<head></head>*:
```
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <!-- Substitua o "style.css", pelo caminho que o arquivo css está salvo em seu computador.
  Em nosso exemplo, ele encontra-se na mesma pasta que o documento HTML, por isso pode ser
  definido desta forma. -->
  <title>Aula 7</title>
</head>

<body>
  <main>
    <h1>FS16 - Aula 7</h1>
  </main>
</body>

</html>
```
Agora sim, verificando nosso site, ele já tem o título vermelho, e a cor de fundo do titulo, em preto, de acordo com a missão que nos foi dada.
### Seletores CSS

Até agora, aprendemos como estilizar o título de um documento HTML. Mas, como faríamos para estilizar elementos de forma individualizada em um arquivo como este?
```
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <!-- Substitua o "style.css", pelo caminho que o arquivo css está salvo em seu computador.
  Em nosso exemplo, ele encontra-se na mesma pasta que o documento HTML, por isso pode ser
  definido desta forma. -->
  <title>Aula 7</title>
</head>

<body>
  <main>
    <h1>FS16 - Aula 7</h1>

    <p>Esse texto deve ser verde</p>
    <p>Esse texto deve ser azul</p>
  </main>
</body>

</html>
```
Para isso, utilizamos o que chamamos de *seletores* em CSS. Os seletores nos permitem definir quais elementos do HTML queremos estilizar. Existe uma grande variedade de seletores que podemos utilizar para selecionar de forma precisa os elementos de um documento CSS, os mais comuns deles são:

- Tag: Utilizado quando queremos estilizar todos os elementos que possuem o mesmo tipo de tag HTML. Para definir esse seletor basta digitarmos o nome da tag, em nosso arquivo de estilização.
- Classe: Utilizado quando queremos estilizar todos os elementos que contem a mesma classe. E para definir ele, utiliza-se um . a frente do nome da classe, no arquivo de estilização
- ID: Por boas práticas, ID’s, devem ser únicos em um documento HTML, então utilizamos esse seletor quando queremos estilizar, expecificamente o elemento que contem o ID fonecedo. E para defilido, utilizamos um # a frente do ID, no arquivo de estilização.

Lembrando que como estamos lidando com uma estilização em cascata, existe uma relação de hierarquia, entre os seletores, mas isso vai ficar como lição de casa para você.

> Vale lembrar que a os metodos e valores de estilização de um elemento, devem ser definidos dentro de *“Chaves”,* em nosso arquivo de estilização.
> 

Seguindo com o exemplo, como queremos aplicar a estilização expecificamente em cada um dos elementos da páginas, vamos utilizar o seletor do tipo ID. Então precisamos defir um ID para cada um dos paragrafos da página.
```
<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <!-- Substitua o "style.css", pelo caminho que o arquivo css está salvo em seu computador.
  Em nosso exemplo, ele encontra-se na mesma pasta que o documento HTML, por isso pode ser
  definido desta forma. -->
  <title>Aula 7</title>
</head>

<body>
  <main>
    <h1>FS16 - Aula 7</h1>

    <p id="texto-verde">Esse texto deve ser verde</p>
    <p id="texto-azul">Esse texto deve ser azul</p>
  </main>
</body>

</html>
```
Agora que temos nossos elementos, separados por ID’s, podemos estiliza-los, individualmente.

Em nosso arquivo de estilização faremos o seguinte:
```
#texto-verde {
	color: green;
}

#texto-azul {
	color: blue;
}
```
Fazendo isso, deveremos ter  resultado final, uma página dessa forma:
![página](\Untitled.png)
## 🏠Tarefa de casa:

- Estudar sobre [CSS Bem](https://getbem.com/introduction/).
- Pesquisar sobre a hierarquia de seletores em CSS.
- Resolver até a questão 40  do [freecodecamp](https://www.freecodecamp.org/learn/).

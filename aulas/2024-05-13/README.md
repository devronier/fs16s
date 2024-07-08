## Primeiros passos com Git

Git é um sistema de <span style="color: pink;">controle de versão</span> criado por <span style="color: pink;">Linus Torvalds em 2005</span>, permitindo que desenvolvedores colaborem eficientemente ao gerenciar alterações no código-fonte. Com um <span style="color: pink;">modelo distribuído</span>, cada desenvolvedor possui uma cópia completa do repositório, garantindo maior segurança. Git facilita o uso de <span style="color: pink;">branches</span> para desenvolver novas funcionalidades e realizar <span style="color: pink;">fusões controladas</span>. Ferramentas como GitHub e GitLab complementam o Git com recursos adicionais. É essencial no desenvolvimento moderno de software, proporcionando um ambiente colaborativo e seguro.

## **Instalação do Git.**

Para instalar o git em seu computador, inicialmente acesse o site [pagina de downloads do git](https://git-scm.com/downloads) e procure pela distribuição para o seu sistema operacional.

- [Windows](https://git-scm.com/download/win)
- [Linux](https://git-scm.com/download/linux)
- [macOS](https://git-scm.com/download/mac)

Feito isso, realize o *download*  desta verssão.

Já com o programa de intalação do git, em seu computador, clique duas vezes sobre ele e em seguida em “*Executar”.* Se tudo estiver correto, você deverá está vendo a seguinte tela em seu monitor:
![image](https://ronierdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc63704c2-e70f-4997-88e7-6562a3fa27a9%2F4e9ddcef-9607-49ca-922d-a057270a829e%2FUntitled.png?table=block&id=efcd42f8-0438-4f73-9341-4878874751f5&spaceId=c63704c2-e70f-4997-88e7-6562a3fa27a9&width=990&userId=&cache=v2)
Agora, para continuar com a instalação, clicaremos em “Next” até que a seguinte tela seja apresentada:
![image](https://ronierdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc63704c2-e70f-4997-88e7-6562a3fa27a9%2F0fb8d157-3a02-4687-9aa7-268e67153350%2FUntitled.png?table=block&id=390a71e5-6409-4295-8b96-c5b9f0e75cde&spaceId=c63704c2-e70f-4997-88e7-6562a3fa27a9&width=1000&userId=&cache=v2)
Nesse momento,  temos duas opções: continuar usando *"master"* como a branch padrão ou optar por uma nomenclatura diferente. A escolha é do desenvolvedor, mas vale notar que existe um movimento na comunidade de desenvolvimento para abandonar o termo *"master"* devido à sua conotação histórica relacionada à escravidão. Em vez disso, muitos passaram a usar *"main"* para se referir à branch principal do repositório.

Seleciona a opção desejada, basta clicar em *“Next”*, para seguir com a instalação. E poderemos seguir clicando nele até que seja apresentada a seguinte tela, indicando que a instalação está em andamento:
![image](https://ronierdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc63704c2-e70f-4997-88e7-6562a3fa27a9%2Fd6808616-0b84-4fee-9c2a-ce077f60bd3f%2FUntitled.png?table=block&id=23b0a9f4-f271-4a73-918f-1dad54879402&spaceId=c63704c2-e70f-4997-88e7-6562a3fa27a9&width=990&userId=&cache=v2)
Por fim sera exibida a seginte tela, informando que a instalação foi bem sucedida:
![image](https://ronierdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc63704c2-e70f-4997-88e7-6562a3fa27a9%2F2613a13e-92ae-424e-b297-cece2b2f42b4%2FUntitled.png?table=block&id=91f742db-4771-4264-8914-80bc56086674&spaceId=c63704c2-e70f-4997-88e7-6562a3fa27a9&width=980&userId=&cache=v2)

## **Criação de um repositório Git. (Init)**

Agora, com o Git devidamente instalado em seu computador, podemos iniciar nosso primeiro repositório. Existem diferentes formas de se iniciar um repositório Git em diversos sistemas operacionais (OS). Neste passo a passo, vamos demonstrar a criação mais comum para o sistema operacional Windows.

Crie uma pasta em seu computador em um diretório de sua preferência e, em seguida, clique com o botão direito do mouse sobre ela. Isso abrirá o menu de contexto do Windows, semelhante à imagem a seguir.
![image](https://ronierdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc63704c2-e70f-4997-88e7-6562a3fa27a9%2F18d0f4b3-fcc9-4c55-9033-e09bd78e99a1%2FUntitled.png?table=block&id=54a12e63-4490-4b6a-b694-3fca8caeeded&spaceId=c63704c2-e70f-4997-88e7-6562a3fa27a9&width=480&userId=&cache=v2)
Em seguida, clique em “Open Git Bash Here”. Fazendo isso, você irá inicializar o terminal do Git Bash no diretório do seu futuro repositório Git. Se tudo estiver correndo bem, você deverá ver uma tela semelhante a esta:
![image](https://ronierdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc63704c2-e70f-4997-88e7-6562a3fa27a9%2F98ad125b-eaae-48d5-b19d-930e428771b7%2FUntitled.png?table=block&id=a898e7fd-029b-43dc-b875-923da74cc949&spaceId=c63704c2-e70f-4997-88e7-6562a3fa27a9&width=1160&userId=&cache=v2)
> **Git Bash** é um aplicativo que fornece uma emulação de linha de comando do Bash em um ambiente Windows. Ele permite que você use comandos Git e Unix para gerenciar seus repositórios, tornando a experiência de uso do Git mais consistente com outros sistemas operacionais baseados em Unix, como Linux e macOS.
> 

Execulta o seguinte comando para iniciar o repositório git local:

```bash
git init
```

Feito isso, o nosso repositório local estará criado, mas isso não é suficiente para que o Git monitore as pastas e arquivos do nosso projeto. Precisamos explicitamente informar ao Git quais arquivos e pastas ele deve rastrear. Vamos abordar isso no próximo tópico.

## Versionamento com Git. (Commit)

Como vimos inicialmente, o Git é uma ferramenta de versionamento. Isso implica que ele deve ser capaz de gravar diferentes estados para o mesmo arquivo, pasta ou programa. Vamos ver como isso funciona a seguir.

Inialmente vamos criar um arquivo index.html na pasta do nosso repositório local (para isso utilizaremos o VSCode), e vamos colocar o seguinte conteudo:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 8</title>
</head>
<body>
    <main>
        <h1>Olá Mundo</h1>
    </main>
</body>
</html>
```

Em seguida, salve o arquivo e abra o Git Bash em seu repositório, para fazer algumas verificações.

O primeiro comando que vamos execultar no Git Bash será o comando, que nos permitirá visualizar o atual statos do nosso repositório

O primeiro comando que vamos executar no Git Bash será o comando que nos permitirá visualizar o status atual do nosso repositório:

```bash
git status
```

Este comando mostra quais mudanças foram registradas, quais não foram e quais arquivos não estão sendo rastreados pelo Git.

Fazendo isso, devemos ver, algo semelhante a isso:
![image](https://ronierdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc63704c2-e70f-4997-88e7-6562a3fa27a9%2F6123530c-eb41-4509-b4fe-29a67585555a%2FUntitled.png?table=block&id=4d280408-9688-4568-a344-1d936bf58681&spaceId=c63704c2-e70f-4997-88e7-6562a3fa27a9&width=1160&userId=&cache=v2)
Nesse momento, o Git está nos informando que existem arquivos que não estão sendo "monitorados" por ele. Em seguida, ele sugere qual comando podemos executar para que o arquivo seja adicionado à sua stack:

```bash
git add <nome_do_arquivo>
```

Ou, para adicionar todos os arquivos não rastreados de uma vez, você pode usar:

```bash
git add .
```

Isso adicionará todos os novos arquivos e mudanças ao estágio de preparação, prontos para o próximo commit.

Verificando o status do nosso repositório agora poderemos ver que o arquivo foi adicionado a stack do git.
![image](https://ronierdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc63704c2-e70f-4997-88e7-6562a3fa27a9%2Ffa0bba40-ef6e-49bd-b1e1-3c278729bbbc%2FUntitled.png?table=block&id=ee642ce4-ff93-4c6a-be77-82d408d08df6&spaceId=c63704c2-e70f-4997-88e7-6562a3fa27a9&width=880&userId=&cache=v2)
Certo, agora nossos arquivos já estão versionados? Sinto em dizer, mas a resposta é ainda não. Para que uma nova versão do nosso projeto seja gerada, precisaremos executar mais um comando, que é:

```bash
git commit -m "Mensagem descritiva do commit"
```

Este comando cria um snapshot dos arquivos atualmente rastreados e adicionados, efetivamente salvando suas mudanças no histórico do repositório.

> Quando dizemos "Mensagem descritiva do commit", nos referimos a mensagens que deixem de forma clara e efetiva a informação do que foi feito nesse commit. Para isso, existem algumas convenções chamadas de "[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)". Vale a pena dedicarmos um tempo para aprofundar nossos conhecimentos sobre essa temática.
> 

Feito isso, agora sim, temos uma nova versão do nosso repositório, que poderemos revisitar futuramente, caso necessário.

Mas como faremos isso?

Bom, antes de entrarmos nesse assunto, primeiro vamos concluir um desafio. E ele é:

Gere duas novas versões do seu repositório. Na primeira, você deverá modificar o conteúdo do elemento **`<h1>`** para "Estou aprendendo versionamento com Git". Na segunda, deverá ser adicionado um elemento **`<p>`** contendo o texto "Git é uma ferramenta de versionamento que irá me auxiliar a gerenciar melhor meus projetos".

## Ramificando o repositorio Git (Branch)

Vamos à seguinte situação:

Ronier, um desenvolvedor com anos de experiência, está liderando um projeto de desenvolvimento de uma plataforma de venda de cursos online. Durante uma reunião com os stakeholders, foi solicitado a ele que fossem implementadas duas novas funcionalidades no site.

Uma delas era desenvolver a funcionalidade que permite ao usuário favoritar os cursos da plataforma. A outra era para trocar alguns elementos do site.

Para otimizar o trabalho do time de desenvolvimento, preservar o estado do projeto e prevenir gaps de desenvolvimento, Ronier instruiu os desenvolvedores de sua equipe a criarem duas branches no repositório, para que cada um dos desenvolvedores do seu squad implementasse uma das funcionalidades e, posteriormente, unisse as mudanças com a ramificação principal do projeto.

Mas como Ronier fez isso?

Bem é isso que veremos a seguir

Uma *“branch”*, ou em tradução livre para o português, “ramificação”, é uma espécie de apêndice ou ramo de uma linha do tempo de um projeto versionado com Git. Ela nos permite realizar modificações em nosso projeto sem necessariamente afetar a linha do tempo principal do projeto.

Ela seguirá paralelamente à ramificação principal e, caso necessário, poderá ser "fundida" a esta. Esse processo é chamado de "merge". Logo mais, falaremos sobre como ele funciona e como podemos utilizá-lo.

Para ciar uma nova “branch” em nosso repositório, iremos executar o seguinte comando no Git Bash:

```bash
git checkout -b <nome da nova branch>
```

> Lembre-se de substituir <nome da nova branch> pelo nome da branch que deseja criar
> 

Executando esse comando, iremos fazer o checkout para nossa nova branch. Isso significa que, enquanto estivermos modificando nossos arquivos nela, não estaremos alterando a ramificação principal do projeto. Em outras palavras, outros desenvolvedores poderão clonar a ramificação principal sem que haja problemas de conflitos com suas modificações.

Mas e se quiséssemos ir para uma branch já existente em nosso projeto, como faríamos?

Bom, primeiramente, precisamos ter a certeza de que a branch realmente existe no projeto. Para isso, podemos realizar o seguinte comando no Git Bash:

```bash
git branch
```

Esse comando deverá listar todas as branches do seu projeto. Agora, sabendo que a branch desejada realmente já existe, podemos utilizar o comando a seguir para fazer o checkout para essa branch:

```powershell
git checkout <nome da branch>
```

> Observe que, diferentemente do comando utilizado para criar uma nova branch, este comando não tem o **`-b`**. Isso é porque queremos apenas fazer o checkout para uma branch já existente, e não criar uma nova. Além disso, lembre-se de substituir **`<nome-da-branch>`** pelo nome da branch que deseja acessar.
> 

Certo, agora que já estamos em uma nova ramificação do nosso repositório e que podemos modificar o projeto sem medo de impactar diretamente a nossa ramificação principal, tente incluir um novo parágrafo contendo um breve descritivo sobre como está sendo sua experiência com o Git. Depois disso, siga o passo a passo de criar uma nova serção do seu projeto.

## Fundindo as ramificações de um repositório Git (Merge)

Na seção anterior, aprendemos como podemos ramificar nosso projeto Git, e foi mencionado que, futuramente, poderíamos fundir essas ramificações com nossa ramificação principal. Bom, o futuro chegou. Nessa seção, veremos como podemos fazer essa junção, utilizando o Git Bash.

### Merge

Se tudo tiver corrido conforme esperado, devomos ter em nosso repositório, mais de uma branch, cada uma com vesões diferentes do nosso código, onde podemos acessar individualmente cadas uma dessas versões com o comando de checkout visto anteriormente.

Agora, vamos unir as nossas ramificações secundárias à ramificação principal do nosso repositório. Para isso vamos realizar os serguintes comandos:

```powershell
git checkout <brach principal>
```

> Lembre se de ajustar o comando para sua ramificação principal.
> 

em seguida:

```powershell
git merge <nome da branch que desejamos fundir a principal>
```

> Lembre se de ajustar o comando de acordo com o nome da sua branch.
> 

Caso, tudo tenha corrido bem, agora teremos uma nova versão do projeto, onde todas as modificações realizadas paralelamente, estaram fazendo parte da linha do tempo principal do projeto.

De formar visual, um projeto ramificado, deve ter a serguinte estrutura.
![image](https://ronierdev.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fc63704c2-e70f-4997-88e7-6562a3fa27a9%2F13a0b53d-7f67-4e0a-8123-6f8902f43710%2FUntitled.png?table=block&id=43fc6f6c-7823-491d-8f53-9d75b4966d18&spaceId=c63704c2-e70f-4997-88e7-6562a3fa27a9&width=1320&userId=&cache=v2)

## 🏡 Tarefa de casa:

- Estudar sobre “Conventional Commits”.
- Git Flow.
- Continuar com as questões do freecodecamp.

➕ Para saber mais:
- [Git - Aula 1](https://www.youtube.com/watch?v=6Czd1Yetaac&ab_channel=FabioAkita)
- [Git - Aula 2](https://www.youtube.com/watch?v=P0Hvrf8T3zo&ab_channel=CursoemV%C3%ADdeo)

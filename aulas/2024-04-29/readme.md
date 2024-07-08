'' o que é pra escrever'' ?

## Formulários

Durante nossa jornada como desenvolvedores, frequentemente nos deparamos com situações em que precisamos "capturar" os dados dos usuários dos sistemas que desenvolvemos. Seja em um login ou na realização de um pedido em uma aplicação de delivery, quase sempre precisaremos dos dados que os usuários estão fornecendo.

Para isso, no desenvolvimento web, frequentemente utilizamos formulários. Em HTML, empregamos a tag **`<form></form>`** para criar essas estruturas de entrada de dados.

- Estrutra báse de um Formulário:

```html
<form>
	<!--Conteudo do formulário-->
</from>
```

Mas como pegaremos esses dados?

Para isso, precisamos de compos, onde os usuário, poderá fornecernos as informações, como emal, senha, nome e sobrenome. Em HTML, esses campos são chamados de _Inputs_.

```html
<input />
```

Essa tag faz parte do grupo de **self-closing tags**, ou seja, são tags do HTML que não necessitam ser fechadas, pois são tags que não irão envolver um outro elemento da página.

Dentro dessa tag, poderam ser fornecidos alguns atributos, como o tipo de input, o valor padão dele, um dica de o que ele deve conter, ou o que deve ser fornecido pelo usuário nele.

Além disso, precisamos identificar essa entrada de dados. Afinal, como o usuário vai saber onde deve informar o e-mail, ou a senha, se isso não for informado?

Para isso, utiizamos tags _label_, essa também terão diversos atributos que podes ser passados para ela, e com ela vai envolver uma informação(como o nome do campo), essa tag precisa ser fechada.

- **Exemplo:**

```html
<label for="nome">Nome</label>
<input id="nome" type="text" placeholder="digite aqui o seu nome" />
```

---

- **Tipos de input**

  - `<input type="button">`
  - `<input type="checkbox">`
  - `<input type="color">`
  - `<input type="date">`
  - `<input type="datetime-local">`
  - `<input type="email">`
  - `<input type="file">`
  - `<input type="hidden">`
  - `<input type="image">`
  - `<input type="month">`
  - `<input type="number">`
  - `<input type="password">`
  - `<input type="radio">`
  - `<input type="range">`
  - `<input type="reset">`
  - `<input type="search">`
  - `<input type="submit">`
  - `<input type="tel">`
  - `<input type="text">`
  - `<input type="time">`
  - `<input type="url">`
  - `<input type="week">`

- **Atributos da tag form**

| Atributo                                                                                                          | Valor                                                             | Descrição                                                                             |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| https://www.w3schools.com/tags/att_form_accept_charset.asp                                                        | character_set                                                     | Especifica as codificações de caracteres que serão usadas para o envio do formulário  |
| https://www.w3schools.com/tags/att_form_action.asp                                                                | URL                                                               | Especifica para onde enviar os dados do formulário quando um formulário é enviado     |
| https://www.w3schools.com/tags/att_form_autocomplete.asp                                                          | onoff                                                             | Especifica se um formulário deve ter o preenchimento automático ativado ou desativado |
| https://www.w3schools.com/tags/att_form_enctype.asp                                                               | application/x-www-form-urlencodedmultipart/form-datatext/plain    | Especifica se um formulário deve ter o preenchimento automático ativado ou desativado |
| Especifica como os dados do formulário devem ser codificados ao enviá-los ao servidor (apenas para method="post") |
| https://www.w3schools.com/tags/att_form_method.asp                                                                | getpost                                                           | Especifica o método HTTP a ser usado ao enviar dados de formulário                    |
| https://www.w3schools.com/tags/att_form_name.asp                                                                  | text                                                              | Especifica o nome de um formulário                                                    |
| https://www.w3schools.com/tags/att_form_novalidate.asp                                                            | novalidate                                                        | Especifica que o formulário não deve ser validado quando enviado                      |
| https://www.w3schools.com/tags/att_form_rel.asp                                                                   | externalhelplicensenextnofollownoopenernoreferreropenerprevsearch | Especifica a relação entre um recurso vinculado e o documento atual                   |
| https://www.w3schools.com/tags/att_form_target.asp                                                                | \_blank_self_parent_top                                           | Especifica onde exibir a resposta recebida após o envio do formulário                 |

### Curiosidade:

> Os formulários foram adicionados ao HTML com a introdução do HTML 2.0 em 1995. Eles foram projetados para permitir interações mais complexas entre usuários e sites, facilitando a entrada de dados que poderiam ser enviados para um servidor web. Isso ampliou significativamente a capacidade do HTML, transformando-o de um simples mecanismo para publicação de documentos hipertexto em uma ferramenta robusta para construção de aplicações interativas na web.

### 🏡Tarefa de casa:

- Estudar sobre inputs HTML, e como devem ser utilizado.
- Estudar sobre os atributos do Formulário HTML, e onde podem ser aplicados.
- Resolver até a questão 20 do Freecodecamp.
- Atualizar o Card na página do notion da turma.

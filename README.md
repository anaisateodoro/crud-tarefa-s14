# On11-TodasEmTech-s14-ProjetoGuiado-BBD

Turma Online 11 - Todas em Tech | Back-end | 2021 | Semana 14: Projeto Guiado - CRUD com BD
<br>
<br>

## Sobre a tarefa da semana 14

O **FavMovies** é um sistema de gerenciamento de catálogos de filmes dos estudios Marvel, Ghibli e Pixar. 

Onde receberemos cadastros de títulos(filmes e séries) referenciando cada estúdio criador. 

<br>
<br>

### Requisitos 
- [x]  **"/titulos/marvel"** Deverá retornar todos os títulos com o estudio Marvel
- [x]  **"/titulos/ghibli"** Deverá retornar todos os títulos com o estudio Ghibli
- [ ]  **"/titulos/pixar"** Deverá retornar todos os títulos com o estudio Pixar

- [x]  **"/estudios"** Deverá retornar todos os estudios cadastrados
- [x]  "**/titulos**" Deverá retornar todos os títulos cadastrados, cada um fazendo referencia ao seu respectivo estudio

- [x]  "**/estudios**" Deverá criar um estudio 
- [x]  "**/titulos**"  Deverá criar um título 

- [ ]  "/titulos/[ID]" Deverá deletar titulo por id específico e retorna mensagem amigável
- [x]  "/estudios/[ID]" Deverá deletar estudio por id específico e retorna mensagem amigável

- [x]  "/titulos/[ID]" Deverá alterar informação específica dentro de um titulo por id específico e retorna o título alterado
- [ ]  "/estudios/[ID]" Deverá alterar informação específica dentro de um estudio por id específico e retorna o título alterado

<br>
<br>

### Regras de negócio

- [x]  Não deverá ser possível criar estudio com o mesmo nome
- [x]  Não deverá ser possível criar título com o mesmo nome
- [x]  Para criar um novo título, deverá vincular no momento da criação a um estudio já existente no sistema

<br>
<br>

### Dados para Collection Estudios

- id: autogerado e obrigatório
- nome: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório

### API deve retornar seguinte JSON:

```jsx
[
{"_id":{"$oid":"60c5450105f1222ecc677fcc"},
"criadoEm":{"$date":"2021-06-12T23:36:16.544Z"},
"nome":"Marvel",
"__v":0}

{"_id":{"$oid":"60c5452305f1222ecc677fcd"},
"criadoEm":{"$date":"2021-06-12T23:36:16.544Z"},
"nome":"Ghibli",
"__v":0}

{"_id":{"$oid":"60c5453a05f1222ecc677fce"},
"criadoEm":{"$date":"2021-06-12T23:36:16.544Z"},
"nome":"Pixar",
"__v":0}

]
```

<br>
<br>

### Dados para Collection Titulos

- id: autogerado e obrigatório
- nome: texto e obrigatório
- genero: texto e obrigatório
- descricao: texto e obrigatório
- criadoEm: data gerada automaticamente e obrigatório
- estudio: referencia do estudio cadastrado previamente obrigatório

```jsx
[
  {
    "criadoEm": "2021-06-12T23:36:16.530Z",
    "_id": "60c5487d05f1222ecc677fcf",
    "nome": "O Serviço de Entregas da Kiki",
    "genero": "fantasia",
    "descricao": "Ao completar 13 anos, seguindo a tradição de todas as bruxas, Kiki deve se mudar para uma cidade na qual não haja nenhuma bruxa e passar lá um ano morando sozinha em uma espécie de “estágio”. Após achar uma bela cidade à beira mar, Kiki e seu gatinho Jiji tentam se adaptar à nova vida.",
    "estudio": {
      "criadoEm": "2021-06-12T23:36:16.544Z",
      "_id": "60c5452305f1222ecc677fcd",
      "nome": "Ghibli",
      "__v": 0
    },
    "__v": 0
  }
]
```
## Tarefa entregue

 - criado um readme com os maiores aprendizados nesse projeto e copiando todas as informações sobre o projeto da tarefa da semana 14.
 - Cumprido com os requisitos e regras de negócios. 
 - Realizado testes no Insomnia e verificado se os dados estão persistindo com o mongoDB.

Postado o link no repositório no classroom.

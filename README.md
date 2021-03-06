<p align="center">
  <img alt="logo" src="./.github/logo.png" />
<p>

# Introdução
<p>
Projeto desenvolvido na 2° edição da Next Level Week realizada pela Rocketseat.

Trata-se de uma plataforma para conexão onde alunos podem agendar aulas com professores de diversas disciplinas.

O projeto foi desenvolvido utilizando as tecnologias ReactJS no frontend, NodeJS na construção da API e React Native para a aplicação mobile.
</p>

<h2 align="center">Tela Principal da aplicação WEB</h2>
<p align="center">
  <img alt="Página principal web" width="1200px" style="border-radius: 8px" src="./.github/Main.png" />
<p>


<h2 align="center">Telas da aplicação mobile</h2>
<p align="center">
    <img alt="Tela principal mobile" width="180px" height="300px" style="border-radius: 8px" src="./.github/Principal.jpg" />
    <img alt="design do projeto" width="180px" height="300px" style="border-radius: 8px" src="./.github/Filtros.jpg" />
    <img alt="design do projeto" width="180px" height="300px" style="border-radius: 8px" src="./.github/Listagem.jpg" />
    <img alt="design do projeto" width="180px" height="300px" style="border-radius: 8px" src="./.github/Favoritos.jpg" />
<p>

## Como Executar

- ### **Requisitos**

  - **[Node.js](https://nodejs.org/en/)**
  - **[Npm](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - **[Git](https://git-scm.com/)**
  - **[Expo](https://expo.io/)**

1. Faça um clone do repositório:

```sh
  $ git clone https://github.com/Raffaz92/Proffy.git
```

2. Executando a Aplicação:

```sh
  # API
  $ cd server
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Configurando o banco de dados e criando as tabelas.
  $ yarn knex:migrate # ou npm run knex:migrate

  # Inicie a API
  $ yarn start # ou npm start

  # Aplicação web
  $ cd web
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação web
  $ yarn start # ou npm start

  # Aplicação mobile
  $ cd mobile
  # Instalando as dependências do projeto.
  $ yarn # ou npm install
  # Inicie a aplicação mobile
  $ yarn start # ou npm start
```


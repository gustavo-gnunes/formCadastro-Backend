<h1 align="center">Cadastro de Carro</h1>
<p align="center">Realiza conexão com o Banco de Dados para realizar um CRUD</p>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-autor">Autor</a> •
 <a href="#licença">Licença</a> •
</p>


## 💻 Sobre o projeto

Faz um CRUD (create, read, update e delete) para consumir uma api.

---

## 🚀 Como executar o projeto

Este projeto é uma parte:
1. Backend

💡Para funcionar o projeto, deve criar uma base de dados com o banco mysql. O nome do banco de dados, host, porta, username, senha, deve estar configurado como no arquivo ormconfig.json.

> Veja o arquivo  [ormconfig.json](https://github.com/gustavo-gnunes/formCadastro-Backend/blob/main/ormconfig.json)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Mysql](https://www.mysql.com/downloads/), [DBeaver](https://dbeaver.io/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:gustavo-gnunes/formCadastro-Backend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd formcadastro-Backend

# Instale as dependências
$ npm install

# Executar as migrations
$ npm typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Mysql](https://github.com/mysqljs/mysql)**
-   **[TypeScript](https://www.typescriptlang.org/)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[typeorm](https://github.com/typeorm/typeorm)**

> Veja o arquivo  [package.json](https://github.com/gustavo-gnunes/formCadastro-Backend/blob/main/package.json)

---

## 🦸 Autor

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/71887796?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Gustavo Genaro</b></sub>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Gustavo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gustavo-genaro-b715396a/)](https://www.linkedin.com/in/gustavo-genaro-b715396a/)


---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---

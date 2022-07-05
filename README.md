# Boas vindas ao repositório Technical Challenge Fullstack



Introdução
=============
Este repositório foi feito com intuito de resolver um desafio proposo pela Trybe. No desafio, devemos elaborar um sistema fullstack em que seja possível cadastrar afazeres das pessoas usuárias de uma empresa, sendo possível criar, deletar, editar e ler todas as atividades prescritas.

Tecnologias
-------------
- Javascript
- React
- MySQL
- Node.js
- Express
- Docker


###Bibliotecas

- BodyParser
- Cors
- Dotenv
- JsonWebToken
- MySQL2
- Nodemon
- Eslint
----

###Como Instalar

####Instalação com Docker
1. Você deve possuir o Docker instalado em sua máquina.
2. Configure as váriaveis de ambient no arquivo `.env`, referentes a sua máquina.
3. A partir da pasta principal do repositório, execute o comando `$ docker-compose up --build`
4. Após concluída a instalação, entre na pasta `./backend/database/todoDatabase.sql` e execute o banco de dados na porta criada pelo docker, para assim, criá-lo.
5. Desfrute da aplicação, que já foi iniciada no seu Browser.

####Instalação sem Docker

1. Você deve possuir o node versão 16 instalado em sua máquina e também MySQL.
2. Navegue até a pasta `./backend/database/todoDatabase.sql` e execute o banco de dados em seu MySQL.
3. Navegue até a pasta `/backend`e execute o comando npm install no terminal.
4. Após a instalação, rode o comando `npm run dev` e deixe o terminal rodando.
5. Abra outro terminal e navegue até a pasta `./frontend`.
6. Execute o comando `npm install`.
7. Após a instalação, rode o comando `npm start`
8. A aplicação ira abrir em seu browser e você já pode utilizá-la.


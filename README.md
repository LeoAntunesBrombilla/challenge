# Challenge Space Flight News

[![codecov](https://codecov.io/gh/LeoAntunesBrombilla/challenge/branch/main/graph/badge.svg?token=3NSCM4OGJG)](https://codecov.io/gh/LeoAntunesBrombilla/challenge)


#### Desafio para medir conhecimentos de desenvolvimento back end utilizando a api [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation). 

#### Breve descrição do fluxo

Este projeto tem um fluxo de CI/CD completo. Desde a hora do commit (utilizando husky), onde não passam commits caso o código não esteja coberto de teste. Em seguida do push o github action começa por fazer o build do projeto para javascript e em seguida temos o deploy em um container docker no heroku. Paralelamente o sonarcloud + codecov estão rodando e analisando a qualidade do projeto. Assim que odeploy é finalizado um web hook foi definido de forma que um bot no discord avisa que a nova versão está no ar!

![bot](https://user-images.githubusercontent.com/76003107/150691328-c48e509a-44fb-4aa4-8c47-de20fc6bed3b.png)

### Linguagem / Frameworks / Tecnologias usados no projeto

- Typescript
- Node js
- Express 
- supertest
- jest
- husky
- mongodb
- docker
- docker-compose
- heroku
- github actions

Para utilizar o projeto você deve:

- clona-lo na sua máquina
- `npm i` (utilizer  a versão 16 do node)
- criar um arquivo .env na raiz do projeto e colocar os seguintes links: 
- `npm run dev`
- a porta é (caso não esteja sendo utilizada) 8000

Também pode fazer uso do docker rodando o comando

- clona-lo na sua máquina
- `npm i` (utilizer  a versão 16 do node)
- `docker-compose -f docker-compose.development.yml up --build`
- a porta é (caso não esteja sendo utilizada) 4000

Pontos conluídos: 

* Obrigatório 1
* Diferencial 1
* Diferencial 4

Link da aplicação: https://challenge-coodesh-node.herokuapp.com/

### PS: Só deixarei os bancos do mongodb de pé até o dia 26!

| This is a challenge by Coodesh

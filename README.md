# Bem-vindo.

** Este projeto consiste em uma API simples, simulando uma Rede Social onde constam dois tipos de elementos:**
- Autores e Postagens;


**Neste projeto, foram utilizadas as seguintes tecnologias e Frameworks:**
- NodeJS;
- NestJS;
- TypeScript;
- PrismaORM;

**Foram aplicados também:**
- Princípios SOLID;
- Regras de Negócio;
- Injeção de Dependência;
- Relacionamento de Tabelas;

Para iniciar o projeto, você deverá ter instalado em seu computador:
- NodeJS;
- NPM;
- Docker;

Após clonar o repositório, você deve instalar as bibliotecas através do comando:
- ``npm install``;

Ao instalar as dependências, para que o projeto funcione, você deve utilizar o docker-compose configurado para a inicialização de um Banco de Dados PostgreSQL, com o comando:
- ``docker-compose up``

Será instanciado um conteiner PostgreSQL bindado na porta 5432, ao qual o nosso projeto de API se conectará.

Logo após subir a instância do DOCKER-COMPOSE, devemos inicializar o nosso banco de dados e populá-lo com nosso seed.
Para isso, execute o seguinte comando:
- ``npm run populate``

Este comando irá popular o nosso banco instanciado no docker-compose

**Inicializando a API localmente:**
Para inicializar a API, digite no terminal:
- ``npm start``
Este comando irá inicializar o nest, e deixar nossa API online na porta 3000

Para verificar se sua API está rodando corretamente, acesse a rota de HealthCheck:
- ``http://localhost:3000/healthcheck``
Será mostrada uma mensagem "Hello World!"

**Inicializando a API via Docker:**
Para inicializar a API via Docker, digite no terminal:
- ``docker-compose up``
Será inicializada a Montagem da imagem Dockerfile configurada e apontada no arquivo ``docker-compose.yml`` do projeto, juntamente do Banco de Dados postgres, este também *configurado* no ``docker-compose.yml``

**Acessando o Swagger para testar a API via Web:**
- ``http://localhost:3000/api-docs/``

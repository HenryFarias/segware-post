# DESAFIO POSTS

**Funcionalidades:**

- Login com perfil de usuário e suas permissões
- Salvar novo post
- Adicionar upvote a um post
- Listagem de post e seus upvotes recebidos
- Substituição de palavrão no post por *****
- Salvar usuário (apenas por api)
- Listar usuário usuário (apenas por api)

**Tecnologias utilizadas:**

- Spring boot
- Spring Security
- Docker e docker-compose
- Swagger
- Liquibase
- Google Cloud Functions
- React e Redux
- Saga

Aplicação sobe em um banco H2 em memória com três usuários padrões:

- Admin (admin@mail.com)
- Writter (writter@mail.com)
- Reader (reader@mail.com)

Todos com a senha 123

**Pré-requisitos:**

- docker-compose instalado na máquina

**Comandos necessários para instalar a aplicação:**

- docker-compose up -d

**Documentação**

A documentação da api se encontra no caminho abaixo:

http://localhost:8080/swagger-ui.html
# Projeto Técnico para a vaga de Desenvolvedor NodeJS Júnior (Rede Social).

Tarefas:

[X] 1. **Configuração Inicial**:

[X] Configure um novo projeto Nest.js com TypeScript e Prisma

[X] 2. **Modelo de Dados**:

[X] Crie um modelo de dados para simular uma rede social simples, incluindo as seguintes entidades:

[X] Usuários: Cada usuário deve ter um ID, nome, email, data de nascimento, biografia e data de criação.

[X] Posts: Cada post deve ter um ID, conteúdo, um usuário associado e data de criação.


[X] 3. **Rotas, Controladores e Services**:
**Crie rotas, controladores e services para realizar as seguintes operações:**

[X] **Usuários**:
[X] POST /users: Crie um novo usuário, recebendo nome, email, data de nascimento e biografia. Retorne os dados completos do usuário criado.

[X] GET /users: Liste todos os usuários cadastrados.

[X] GET /users/:id: Obtenha os detalhes de um usuário específico.

[X] PUT /users/:id: Atualize os dados de um usuário específico.

[X] DELETE /users/:id: Exclua um usuário específico.


[X] **Posts**:
[X] POST /posts: Crie um novo post, recebendo o ID do usuário e o conteúdo do post. Retorne os dados completos do post criado.

[X] GET /posts: Liste todos os posts cadastrados.

[X] GET /posts/:id: Obtenha os detalhes de um post específico.

[X] PUT /posts/:id: Atualize o conteúdo de um post específico.

[X] DELETE /posts/:id: Exclua um post específico.



[] 4. **Bônus (Opcional)**:
[] Implemente autenticação JWT (JSON Web Token) para proteger as rotas de criação, atualização e exclusão de posts. Crie uma rota de login para obter um token JWT válido.

[] Publicar a API em um cloud provider de sua escolha (exemplo: AWS, GCP, Heroku, Render)

[] Criar uma imagem da API com o docker.
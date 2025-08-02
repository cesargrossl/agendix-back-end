# Agendix Back-End API

Este projeto é uma API RESTful para gerenciamento de usuários, desenvolvida em Node.js e Express, utilizando PostgreSQL como banco de dados, preparada para ambientes de desenvolvimento local (Docker) e produção (Render.com).

---

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- PostgreSQL
- Docker & Docker Compose
- Render.com (deploy)
- dotenv (variáveis de ambiente)
- bcrypt (criptografia de senha)

---

## 📦 Estrutura do Projeto
```
/
|- src/
|    |- index.js
|    |- database.js
|    |- controllers/
|    |- routes/
|- .env              # produção (Render)
|- .env_local        # desenvolvimento local
|- package.json
|- docker-compose.yml
|- Dockerfile
|- init.sql
```

---

## 🔧 Como rodar em desenvolvimento local (Docker)

1. **Configure o arquivo `.env_local`**
   ```env
   PORT=3000
   DB_HOST=postgres
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=api_usuarios
   DB_PORT=5432
   ```

2. **Inicie o ambiente com Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. Acesse a API:
   - Endpoint: `http://localhost:3000/api/usuarios`

---

## 🐘 Como conectar ao banco local pelo pgAdmin

- **Host**: `localhost`
- **Port**: `5432`
- **Database**: `api_usuarios` (ou `postgres` para manutenção)
- **User**: `postgres`
- **Password**: `postgres`

---

## 🌐 Deploy no Render.com

1. **Suba o código para o GitHub** (mantenha as credenciais sensíveis APENAS no `.env_local` ou painel da Render).
2. **Crie um serviço Web Service no Render** apontando para seu repositório.
3. **Configure as variáveis de ambiente no painel Render:**
   ```env
   PORT=3000
   DB_HOST=dpg-xxxxxx.oregon-postgres.render.com
   DB_USER=db_agendix_user
   DB_PASSWORD=senha_da_render
   DB_NAME=db_agendix
   DB_PORT=5432
   DB_SSL=true
   ```
4. Faça o deploy e teste o endpoint fornecido pelo Render.

---

## 📚 Endpoints disponíveis

- `POST /api/usuarios` — Cria um novo usuário  
  - JSON: `{ "nome": "string", "email": "string", "senha": "string" }`
- `GET /api/usuarios` — Lista todos os usuários

---

## 📝 Observações
- O projeto faz controle automático de SSL: use a env `DB_SSL=true` apenas em produção.
- O Docker Compose facilita o desenvolvimento e isola dependências.
- Scripts de desenvolvimento no `package.json`:
    - `npm start` — produção
    - `npm run dev` — desenvolvimento local (copia `.env_local` para `.env`)

---

## 👨‍💻 Autor
Cesar Grossl

---

## 🏷️ Licença
Este projeto está sob licença MIT.

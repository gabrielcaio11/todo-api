# ToDo API - Node.js + MongoDB

API RESTful para gerenciamento de tarefas (ToDo), desenvolvida com Node.js, Express e MongoDB, seguindo boas práticas de arquitetura em camadas.


## Funcionalidades

- Criar tarefa
- Listar tarefas
- Buscar tarefa por ID
- Atualizar tarefa
- Deletar tarefa
- Paginação
- Filtros (por status)
- Ordenação
- Validação de dados
- Tratamento global de erros
- Containerização com Docker


##  Arquitetura

O projeto segue uma arquitetura em camadas:



**Controller → Service → Model**

```
- Controller → Camada HTTP (req/res)
- Service → Regras de negócio
- Model → Acesso ao banco de dados
```

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Docker
- Dotenv


## Como executar o projeto

### 1. Clonar repositório

```bash
git clone https://github.com/seu-usuario/todo-api.git
cd todo-api
```


### 2. Instalar dependências

```bash
npm install
```


### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz:

```env
PORT=3000
MONGO_URI=sua_string_do_mongodb
```

## Rodando com Docker

### Usando Docker Compose

```bash
docker-compose up
```

## Tratamento de erros

A API possui middleware global para tratamento de erros, retornando respostas padronizadas:

```json
{
  "message": "Descrição do erro"
}
```

## Melhorias futuras

* Autenticação com JWT
* Testes automatizados (TDD)
* Deploy na AWS
* Frontend em React


## Autor

Gabriel

* LinkedIn: [Gabriel Caio](https://www.linkedin.com/in/gabriel-caio/)
* Email: [gabrielcaio848@email.com](mailto:gabrielcaio848@email.com)


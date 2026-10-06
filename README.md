# Employees

## Sumário

* [O que é o projeto](#o-que-é-o-projeto)
* [Tecnologias](#tecnologias)
* [Pastas](#pastas)
* [Requisitos](#requisitos)
* [Como rodar](#como-rodar)
* [Onde acessar](#onde-acessar)
* [Banco de dados](#banco-de-dados)
* [Endpoints](#endpoints)
* [Exemplos de resposta](#exemplos-de-resposta)
* [Como parar](#como-parar)

## o projeto

É um CRUD de funcionários (criar, listar, buscar, atualizar e apagar). Os dados ficam numa tabela chamada `employees` com estes campos:

* `id`
* `full_name`
* `document`
* `role`
* `salary`


## Tecnologias

* PostgreSQL (banco de dados)
* NestJS (API)
* React (front)
* Docker e Docker Compose

## Pastas

```text
employees/
├── api/      -> API em NestJS
├── front/    -> telas em React
├── deploy/   -> docker-compose.yml
└── README.md
```

```bash
git clone URL_DO_REPOSITORIO
cd employees
```

```bash
docker compose -f deploy/docker-compose.yml up --build
```

```bash
docker compose -f deploy/docker-compose.yml ps
```

| O que      | Endereço                      |
|------------|-------------------------------|
| Front      | http://localhost:8080         |
| API        | http://localhost:3000         |
| Swagger    | http://localhost:3000/docs    |
| PostgreSQL | localhost:5432                |


* usuário: `postgres`
* senha: `postgres`
* banco: `appdb`


## Banco de dados

O PostgreSQL utiliza:

Banco: employees
Usuário: postgres
Senha: postgres
Porta: 5432

```bash
docker compose -f deploy/docker-compose.yml up -d db
```

```bash
docker compose -f deploy/docker-compose.yml exec db psql -U postgres -d appdb
```

```bash
docker compose -f deploy/docker-compose.yml exec db psql -U postgres -d appdb -c "SELECT * FROM employees;"
```

```bash
docker compose -f deploy/docker-compose.yml down     
docker compose -f deploy/docker-compose.yml up -d    
```

```bash
docker volume ls
```

As variáveis do banco (usuário, senha, nome e porta) têm valor padrão no compose.

## Endpoints

| Método | Rota             | O que faz                   |
|--------|------------------|-----------------------------|
| GET    | `/employees`     | lista todos                 |
| GET    | `/employees/:id` | busca um pelo id            |
| POST   | `/employees`     | cadastra um novo            |
| PATCH  | `/employees/:id` | atualiza um funcionário     |
| DELETE | `/employees/:id` | apaga um funcionário        |




## Exemplos de resposta

# Cadastrar (`POST /employees`):

```json
{
  "full_name": "João da Silva",
  "document": "12345678900",
  "role": "Motorista",
  "salary": 3500.00
}
```

Resposta (`201`):

```json
{
  "id": 1,
  "full_name": "João da Silva",
  "document": "12345678900",
  "role": "Motorista",
  "salary": 3500.00
}
```

Listar (`GET /employees`):

```json
[
  {
    "id": 1,
    "full_name": "João da Silva",
    "document": "12345678900",
    "role": "Motorista",
    "salary": 3500.00
  }
]
```

Atualizar (`PATCH /employees/1` com `{"salary": 4000}`):

```json
{
  "id": 1,
  "full_name": "João da Silva",
  "document": "12345678900",
  "role": "Motorista",
  "salary": 4000
}
```

```json
{
  "message": "Employee 99 não encontrado",
  "error": "Not Found",
  "statusCode": 404
}
```

```bash
docker compose -f deploy/docker-compose.yml down
```

```bash
docker compose -f deploy/docker-compose.yml down -v
```
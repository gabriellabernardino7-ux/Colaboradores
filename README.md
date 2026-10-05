# Employees API

Projeto desenvolvido para gerenciamento de colaboradores, utilizando PostgreSQL, NestJS, React e Docker Compose.

## Sumário

* [Descrição](#descrição)
* [Tecnologias](#tecnologias)
* [Estrutura do projeto](#estrutura-do-projeto)
* [Requisitos](#requisitos)
* [Como executar](#como-executar)
* [Endpoints CRUD](#endpoints-crud)
* [Exemplos de resposta](#exemplos-de-resposta)
* [Como parar o projeto](#como-parar-o-projeto)

## Descrição

Sistema para cadastro e gerenciamento de colaboradores.

A tabela principal do projeto será `employees`, contendo os seguintes campos:

* `id`
* `full_name`
* `document`
* `role`
* `salary`

## Tecnologias

* PostgreSQL
* NestJS
* React
* Docker
* Docker Compose

## Estrutura do projeto

```text
employees/
├── api/
├── front/
├── deploy/
└── README.md
```

## Requisitos

Para executar o projeto, é necessário ter instalado:

* Git
* Docker
* Docker Compose
* Node.js

## Como executar

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd employees
```

Execute os containers:

```bash
docker compose -f deploy/docker-compose.yml up --build
```

Após a inicialização, os serviços estarão disponíveis nas portas definidas no Docker Compose.

## Endpoints CRUD

### Listar colaboradores

```http
GET /employees
```

### Buscar colaborador por ID

```http
GET /employees/:id
```

### Criar colaborador

```http
POST /employees
```

### Atualizar colaborador

```http
PATCH /employees/:id
```

### Excluir colaborador

```http
DELETE /employees/:id
```

## Exemplo de cadastro

```json
{
  "full_name": "João da Silva",
  "document": "12345678900",
  "role": "Motorista",
  "salary": 3500.00
}
```

## Exemplo de resposta

```json
{
  "id": 1,
  "full_name": "João da Silva",
  "document": "12345678900",
  "role": "Motorista",
  "salary": 3500.00
}
```

## Como parar o projeto

Para parar os containers:

```bash
docker compose -f deploy/docker-compose.yml down
```

Para parar os containers e remover também os volumes:

```bash
docker compose -f deploy/docker-compose.yml down -v
```

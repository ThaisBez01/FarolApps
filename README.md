"# FarolApps" 

## dotenv
Gere seu arquivo `.env` copiando o `.env.example` e configure as variáveis do seu ambiente

## Instalação de dependências
`yarn install`

## Rodando projeto em modo dev
`yarn dev`

## Servidor Banco de dados [Opcional]

Recomendamos utilizar a imagem postgres11 no docker para criar o servidor de banco de dados:
`docker run --name farol -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:12`


## Comandos iniciais de geração da estrutura do banco de dados
`yarn sequelize db:create` - para criar o banco de dados caso não exista
`yarn sequelize db:migrate` - para rodas as migrações
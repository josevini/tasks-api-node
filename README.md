# Como rodar esta API
## Requisitos
* yarn ou npm
* docker e docker-compose
* sequelize-cli
## .env
```shell
cp .env.example .env
```
Após criar o arquivo .env, edite o para:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=pass
DB_PORT=3306
DB_NAME=db
PMA_PORT=8080
```
## Install dependencies and run docker
```shell
yarn install
docker-compose -f 'docker-compose.yml' up -d
```
Após instalar as dependências e iniciar os containers docker, crie o arquivo de configuração do sequelize para rodar as migrations.
## Run migrations and start server
```shell
npx sequelize-cli init:config
npx sequelize-cli db:migrate
yarn dev
```
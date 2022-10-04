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
```
## Run
```shell
yarn install
docker-compose -f 'docker-compose.yml' up -d
npx sequelize-cli db:migrate
yarn dev
```
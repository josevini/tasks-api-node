# tasks-api-node

## To start a project:

---
### Create a .env file, using the .env.example for that.

~~~dockerfile
Run: docker-compose up
~~~
---
After, run migrations when a db up.
---
~~~javascript
npx sequelize-cli db:migrate
~~~
---
And run project using npm or yarn for that.
---
~~~javascript
npx run dev
~~~

### Or

~~~javascript
yarn dev
~~~
---
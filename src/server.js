const express = require('express')
const app = express()

require('dotenv').config()
const env = process.env

const routes = require('./routes')
app.use(routes)

app.listen(env.PORT)
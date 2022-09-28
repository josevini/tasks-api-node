const express = require('express')
const app = express()

require('dotenv').config()
const env = process.env

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./routes')
app.use(routes)

app.listen(env.PORT)
const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes')
app.listen(PORT)
app.use(routes)
require('dotenv').config()
const env = process.env
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(`mysql://${env.DB_USER}:${env.DB_PASS}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`)

module.exports = sequelize
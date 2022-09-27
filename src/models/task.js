'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('./Sequelize')

class Task extends Model {}

Task.init({
  title: DataTypes.STRING,
  description: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Task',
})

module.exports = Task
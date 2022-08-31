const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const Category = db.define('Categorys', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

db.sync().then(() => {
  console.log('Category Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = Category

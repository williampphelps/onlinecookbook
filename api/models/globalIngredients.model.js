const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const GlobalIngredients = db.define('GlobalIngredients', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

db.sync().then(() => {
  console.log('GlobalIngredients Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = GlobalIngredients

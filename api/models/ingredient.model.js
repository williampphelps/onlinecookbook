const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const Ingredient = db.define('Ingredients', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  ingredient_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  style: {
      type: DataTypes.STRING,
      allowNull: false
    },
  measurement: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  measurementUnit_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

db.sync().then(() => {
  console.log('Ingredient Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = Ingredient

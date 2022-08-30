const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const BookRecipe = db.define('bookRecipes', {
  book_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  recipe_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

db.sync().then(() => {
  console.log('bookRecipe Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = BookRecipe

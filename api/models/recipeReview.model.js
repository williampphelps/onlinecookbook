const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const RecipeReview = db.define('RecipeReview', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  author: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

db.sync().then(() => {
  console.log('RecipeReview Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = RecipeReview

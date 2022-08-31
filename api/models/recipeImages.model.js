const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const RecipeImage = db.define('RecipeImages', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_filename: {
        type: DataTypes.STRING,
        allowNull: false
      },
})

db.sync().then(() => {
  console.log('RecipeImage Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = RecipeImage

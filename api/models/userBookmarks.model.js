const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const UserBookmark = db.define('UserBookmark', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

})

db.sync().then(() => {
  console.log('UserBookmark Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = UserBookmark

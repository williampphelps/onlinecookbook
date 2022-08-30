const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const Book = db.define('books', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

db.sync().then(() => {
  console.log('Book Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = Book

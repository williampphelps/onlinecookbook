const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const Step = db.define('Step', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    order_number: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  direction: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

db.sync().then(() => {
  console.log('Step Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = Step

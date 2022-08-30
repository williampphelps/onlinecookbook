const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const MeasurementUnit = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  measurement: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

db.sync().then(() => {
  console.log('measurementUnit Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = MeasurementUnit

const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')

const Recipe = db.define('Recipe', {
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
        type: DataTypes.INTEGER,
        allowNull: false
      },
  prepTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  cookTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
  servings: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
  public: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  skill_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
  course_id: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
})

db.sync().then(() => {
  console.log('User Table Created Successfully!')
}).catch((error) => {
  console.error('Unable to create table : ', error)
})

module.exports = User

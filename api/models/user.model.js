const { Sequelize, DataTypes } = require("sequelize");
const db = require('../db');

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

db.sync().then(() => {
    console.log('User Table Created Successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = User

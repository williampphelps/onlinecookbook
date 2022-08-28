const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'cookbook',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('MYSQL connection established successfully.')
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});



module.exports = sequelize
/*

// Using Regular SQL library

const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cookbook'
});


con.connect(function(err) {
    if (err) {
        console.log(err)
    }
    console.log("MYSQL CONNECTED!")
});

module.exports = con
*/

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

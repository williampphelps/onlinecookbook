const config = require('../config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require("../db")

module.exports.register = [
    function (req, res) {
        let sql = "INSERT INTO users (fname, username, password) VALUES ?";
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password, salt);
        let values = [[req.body.fname, req.body.username, hash]];
        db.query(sql, [values], function (err, result) {
            if (err) {
                return res.status(500).json({ message: 'Error registering user!', errors: err })
            }
            return res.status(201).json({ message: 'User Registered!', _id: result.affectedRows })
        });
    }
]

module.exports.list = [
    function (req, res) {
        let sql = "SELECT * FROM users";
        db.query(sql, function (err, result) {
            if (err) {
                return (res.status(500).json({ message: 'Error', errors: err }));
            }
            return res.status(200).json({ message: result })
        })
    }
]

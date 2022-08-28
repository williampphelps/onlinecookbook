const config = require('../config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require("../db")
const User = require("../models/user.model.js");

module.exports.register = [
    function (req, res) {
        let sql = "INSERT INTO users (fname, username, password) VALUES ?";
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(req.body.password, salt);
        // let values = [[req.body.fname, req.body.username, hash]];
        /* db.query(sql, [values], function (err, result) {
            if (err) {
                return res.status(500).json({ message: 'Error registering user!', errors: err })
            }
            return res.status(201).json({ message: 'User Registered!', _id: result.affectedRows })
        });
        */
        db.sync().then(() => {
            const newUser = User.create({ fname: req.body.fname, username: req.body.username, password: hash }).then(result => {
                return res.status(201).json({ data: result });
            }).catch((error) => {
                console.error('Failed to register new user: ', error);
                return res.status(500).json({ data: error });
            });
        }).catch((error) => {
            console.error('Unable to create user table: ', error);
            return res.status(500).json({ data: error });
        });
    }
]

module.exports.login = [
    function (req, res) {
        db.sync().then(() => {
            User.findOne({
                where: {
                    username: req.body.username
                }
            }).then(result => {
                if (result == null) {
                    return res.status(500).json({
                        data: 'User Not Found'
                    });
                }
                bcrypt.compare(req.body.password, result.password, function(err, isMatched) {
                    if (isMatched === true) {
                        return res.status(200).json({
                            user: {
                                _id: result.id,
                                username: result.username,
                                fname: result.fname,
                            },
                            token: jwt.sign({_id: result.id, username: result.username, fname: result.fname }, config.authSecret)
                        });
                    } else {
                        return res.status(500).json({
                            data: 'Invalid Username or Email'
                        });
                    }
                });
            }).catch((error) => {
                console.error('Failed to retrieve data: ', error);
                return res.status(500).json({ data: error });
            })
        }).catch((error) => {
            console.error('Unable to use user table: ', error);
            return res.status(500).json({ data: error });
        });
    }
]

module.exports.list = [
    function (req, res) {
        db.sync().then(() => {
            User.findAll().then(result => {
                return res.status(200).json({ data: result })
            }).catch((error) => {
                console.error('Failed to retrieve data: ', error);
                return res.status(500).json({ data: error });
            });
        }).catch((error) => {
            console.error('Unable to use user table: ', error);
            return res.status(500).json({ data: error });
        });

    }
]

module.exports.user = [
    function (req, res) {
        var token = req.headers.authorization
        if (token) {
            jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, function(err, decoded) {
                if (err) {
                    return res.status(401).json({ data: 'unauthorized' });
                } else {
                    return res.status(200).json({ user: decoded });
                }
            })
        } else {
            return res.status(401).json({ data: 'unauthorized' });
        }
    }
]

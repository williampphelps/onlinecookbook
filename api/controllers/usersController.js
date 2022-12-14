const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../config')
const db = require('../db')
const User = require('../models/user.model.js')

module.exports.register = [
  function (req, res) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)
    // let values = [[req.body.fname, req.body.username, hash]];
    /* db.query(sql, [values], function (err, result) {
            if (err) {
                return res.status(500).json({ message: 'Error registering user!', errors: err })
            }
            return res.status(201).json({ message: 'User Registered!', _id: result.affectedRows })
        });
        */
    db.sync().then(() => {
      User.create({ fname: req.body.fname, username: req.body.username, password: hash }).then((result) => {
        return res.status(201).json({ result })
      }).catch((error) => {
        console.error('Failed to register new user: ', error)
        return res.status(500).json({ error: error })
      })
    }).catch((error) => {
      console.error('Unable to create user table: ', error)
      return res.status(500).json({ error: error })
    })
  }
]

module.exports.login = [
  function (req, res) {
    db.sync().then(() => {
      User.findOne({
        where: {
          username: req.body.username
        }
      }).then((result) => {
        if (result == null) {
          return res.status(500).json({
            message: 'Invalid Username or Password'
          })
        }
        bcrypt.compare(req.body.password, result.password, function (err, isMatched) {
          if (isMatched === true) {
            return res.status(200).json({
              user: {
                _id: result.id,
                username: result.username,
                fname: result.fname
              },
              token: jwt.sign({ _id: result.id, username: result.username, fname: result.fname }, config.authSecret)
            })
          } else {
            return res.status(500).json({
              message: 'Invalid Username or Password'
            })
          }
        })
      }).catch((error) => {
        console.error('Failed to retrieve data: ', error)
        return res.status(500).json({ message: error })
      })
    }).catch((error) => {
      console.error('Unable to use user table: ', error)
      return res.status(500).json({ message: error })
    })
  }
]

module.exports.list = [
  function (req, res) {
    db.sync().then(() => {
      User.findAll().then((result) => {
        return res.status(200).json({ data: result })
      }).catch((error) => {
        console.error('Failed to retrieve data: ', error)
        return res.status(500).json({ data: error })
      })
    }).catch((error) => {
      console.error('Unable to use user table: ', error)
      return res.status(500).json({ data: error })
    })
  }
]

module.exports.user = [
  function (req, res) {
    const token = req.headers.authorization
    if (token) {
      jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, function (err, decoded) {
        if (err) {
          return res.status(401).json({ data: 'unauthorized' })
        } else {
          return res.status(200).json({ user: decoded })
        }
      })
    } else {
      return res.status(401).json({ data: 'unauthorized' })
    }
  }
]

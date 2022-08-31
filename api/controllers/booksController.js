const jwt = require('jsonwebtoken')
const config = require('../config')
const db = require('../db')
const Book = require('../models/book.model.js')

module.exports.getAll = [
  function (req, res) {
    db.sync().then(() => {
      Book.findAll().then((result) => {
        return res.status(200).json({ data: result })
      }).catch((error) => {
        console.error('Failed to retrieve data: ', error)
        return res.status(500).json({ error: error })
      })
    }).catch((error) => {
      console.error('Unable to use books table: ', error)
      return res.status(500).json({ error: error })
    })
  }
]

module.exports.create = [
  function (req, res) {
    const token = req.headers.authorization
    if (token) {
      jwt.verify(token.replace(/^Bearer\s/, ''), config.authSecret, function (err, decoded) {
        if (err) {
          return res.status(401).json({ message: 'unauthorized' })
        } else {
          let userID = decoded._id
          db.sync().then(() => {
            Book.create({ name: req.body.name, author: req.body.author, user_id: userID }).then((result) => {
              return res.status(201).json({ result })
            }).catch((error) => {
              console.error('Failed to create data: ', error)
              return res.status(500).json({ error: error })
            })
          }).catch((error) => {
            console.error('Unable to use books table: ', error)
            return res.status(500).json({ error: error })
          })
        }
      })
    } else {
      return res.status(401).json({ message: 'unauthorized' })
    }
  }
]

module.exports.getById = [
  function (req, res) {
    let BookId = req.params.id;
    db.sync().then(() => {
      Book.findByPk(BookId).then((result) => {
        if (!result) {
          return res.status(404).json({ error: 'NOT FOUND'})
        }
        return res.status(200).json({ result })
      }).catch((error) => {
        return res.status(500).json({ error: error })
      })
    }).catch((error) => {
      return res.status(500).json({ error: error })
    })
  }
]

module.exports.updateById = [
  function (req, res) {
    let BookId = req.params.id;
    db.sync().then(() => {
      Book.update({ name: req.body.name, author: req.body.author }, { where: { id: BookId }}).then((result) => {
        return res.status(200).json({ data: result })
      }).catch((error) => {
        return res.status(500).json({ error: error })
      })
    }).catch((error) => {
      return res.status(500).json({ error: error })
    })
  }
]

module.exports.deleteById = [
  function (req, res) {
    let BookId = req.params.id;
    db.sync().then(() => {
      Book.destroy({ where: { id: BookId } }).then((result) => {
        return res.status(204).json({ result })
      }).catch((error) => {
        return res.status(500).json({ error: error, location: 'Book.destroy catch' })
      })
    }).catch((error) => {
      return res.status(500).json({ error: error, location: 'Db.sync catch' })
    })
  }
]

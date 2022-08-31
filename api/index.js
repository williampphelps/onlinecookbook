const express = require('express')
const db = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Require & Import API routes

// import users API
const users = require('./routes/users')
const books = require('./routes/books')

app.use(users)
app.use(books)

module.exports = {
  path: '/api',
  handler: app
}

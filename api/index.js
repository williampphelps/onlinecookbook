const express = require('express')
const db = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Require & Import API routes

// import users API
const users = require('./routes/users')

app.use(users)

module.exports = {
  path: '/api',
  handler: app
}

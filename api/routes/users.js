const config = require('../config')

const { Router } = require('express')

const router = Router()

const usersController = require('../controllers/usersController')

router.post('/users/register', usersController.register)

router.get('/users/list', usersController.list)

module.exports = router

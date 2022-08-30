const { Router } = require('express')
const config = require('../config')

const router = Router()

const booksController = require('../controllers/booksController')

router.get('/books', booksController.getAll)
router.post('/books', config.isAuthenticated, booksController.create)
router.get('/books/:id', booksController.getById)
router.patch('/books/:id', booksController.updateById)
router.delete('/books/:id', booksController.deleteById)

module.exports = router

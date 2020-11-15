// include Express and Express router
const express = require('express')
const router = express.Router()

// include modules
const home = require('./modules/home')
const records = require('./modules/records')
const categories = require('./modules/categories')
const users = require('./modules/users')
const auth = require('./modules/auth')
const { authenticator } = require('../middleware/auth')

router.use('/records', authenticator, records)
router.use('/categories', authenticator, categories)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

// export module
module.exports = router
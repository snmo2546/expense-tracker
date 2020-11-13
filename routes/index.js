// include Express and Express router
const express = require('express')
const router = express.Router()

// include modules
const home = require('./modules/home')
const records = require('./modules/records')
const categories = require('./modules/categories')
const users = require('./modules/users')

router.use('/', home)
router.use('/records', records)
router.use('/categories', categories)
router.use('/users', users)

// export module
module.exports = router
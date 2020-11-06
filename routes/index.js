// include Express and Express router
const express = require('express')
const router = express.Router()

// include modules
const home = require('./modules/home')
const records = require('./modules/records')
const categories = require('./modules/categories')

router.use('/', home)
router.use('/records', records)
router.use('/categories', categories)

// export module
module.exports = router
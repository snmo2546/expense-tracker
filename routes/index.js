// include Express and Express router
const express = require('express')
const router = express.Router()

// include modules
const home = require('./modules/home')
const records = require('./modules/records')

router.use('/', home)
router.use('/records', records)

// export module
module.exports = router
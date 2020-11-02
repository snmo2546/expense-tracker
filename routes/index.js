// include Express and Express router
const express = require('express')
const router = express.Router()

// include modules
const home = require('./modules/home')

router.use('/', home)

// export module
module.exports = router
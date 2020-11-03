// include Express and Express router
const express = require('express')
const Record = require('../../models/record')
const calculateTotalAmount = require('../../models/functions/calculateTotalAmount')
const router = express.Router()

// set routes
router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => {
      res.render('index', { records, totalAmount: calculateTotalAmount(records) })
    })
    .catch(error => console.log(error))
})

// export module
module.exports = router
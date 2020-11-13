// include Express and Express router
const express = require('express')
const Record = require('../../models/record')
const Category = require('../../models/category')
const functions = require('../../models/functions/functions')
const months = require('../../models/data/months.json')
const calculateTotalAmount = functions.calculateTotalAmount
const router = express.Router()

// set routes
router.get('/', (req, res) => {
  let selectedFilter = req.query.filter
  let selectedMonth = req.query.filterMonth
  Category.find()
    .lean()
    .then(categories => {
      Record.find()
        .lean()
        .then(records => {
          if (typeof selectedFilter !== 'undefined' && selectedFilter !== 'all') {
            records = records.filter(record => record.category === selectedFilter)
          }

          if (typeof selectedMonth !== 'undefined' && selectedMonth !== 'all') {
            records = records.filter(record => record.date.split('-')[1] === selectedMonth)
          }

          res.render('index', { records, categories, selectedFilter, months, selectedMonth, totalAmount: calculateTotalAmount(records) })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

// export module
module.exports = router
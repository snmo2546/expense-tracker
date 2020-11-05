// include Express and Express router
const express = require('express')
const Record = require('../../models/record')
const Category = require('../../models/category')
const calculateTotalAmount = require('../../models/functions/calculateTotalAmount')
const showSelectedCategory = require('../../models/functions/showSelectedCategory')
const router = express.Router()

// set routes
router.get('/', (req, res) => {
  let selectedFilter = req.query.filter
  Category.find()
    .lean()
    .then(categories => {
      Record.find()
        .lean()
        .then(records => {
          if (typeof selectedFilter !== 'undefined' && selectedFilter !== "所有支出") {
            records = records.filter(record => record.category === selectedFilter)
            showSelectedCategory(categories, selectedFilter)
          } else if (selectedFilter === "所有支出") {
            return res.render('index', { records, categories, totalAmount: calculateTotalAmount(records) })
          }
          res.render('index', { records, categories, selectedFilter, totalAmount: calculateTotalAmount(records) })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

// export module
module.exports = router
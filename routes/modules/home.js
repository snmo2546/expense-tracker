// include Express and Express router
const express = require('express')
const Record = require('../../models/record')
const Category = require('../../models/category')
const calculateTotalAmount = require('../../models/functions/calculateTotalAmount')
const router = express.Router()

// set routes
router.get('/', (req, res) => {
  const selectedFilter = req.query.filter

  Category.find()
    .lean()
    .then(categories => {
      Record.find()
        .lean()
        .then(records => {
          if (selectedFilter && selectedFilter !== "") {
            records = records.filter(record => record.categoryName === selectedFilter)
          }
          res.render('index', { records, categories, selectedFilter, totalAmount: calculateTotalAmount(records) })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.llg(error))

})

// export module
module.exports = router
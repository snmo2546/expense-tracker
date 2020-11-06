// include Express and Express router
const express = require('express')
const Category = require('../../models/category')
const router = express.Router()

// set routes
router.get('/', (req, res) => {
  Category.find()
    .lean()
    .then(categories => {
      res.render('categories', { categories })
    })
    .catch(error => console.log(error))
})

// export module
module.exports = router
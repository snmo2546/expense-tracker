// include Express and Express router
const express = require('express')
const Category = require('../../models/category')
const icons = require('../../models/data/icons.json')
const router = express.Router()

// set routes
router.get('/', (req, res) => {
  Category.find()
    .lean()
    .then(categories => {
      res.render('categories', { categories, icons })
    })
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const icon = req.body
  return Category.create({
    'category': icon.name,
    'categoryIcon': icon.iconSelection,
  })
    .then(() => res.redirect('/categories'))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Category.findById(id)
    .then(category => category.remove())
    .then(() => res.redirect('/categories'))
    .catch(error => console.log(error))
})

// export module
module.exports = router
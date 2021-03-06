// include Express and Express router
const express = require('express')
const Record = require('../../models/record')
const Category = require('../../models/category')
const router = express.Router()

// set routes
router.get('/new', (req, res) => {
  Category.find()
    .lean()
    .then(categories => res.render('new', { categories }))
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const userId = req.user._id
  const record = req.body
  Category.find()
    .lean()
    .then(categories => {
      const assignedCategory = categories.find(category => category.category === record.category)
      return Record.create({
        'name': record.name,
        'date': record.date,
        'category': record.category,
        'categoryIcon': assignedCategory.categoryIcon,
        'amount': record.amount,
        'merchant': record.merchant,
        userId
      })
        .then(() => res.redirect('/'))
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .lean()
    .then(record => {
      const recordCategory = record.category
      Category.find()
        .lean()
        .then(categories => {
          res.render('edit', { record, categories, recordCategory })
        })
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => {
      record = Object.assign(record, req.body)
      Category.find()
        .lean()
        .then(categories => {
          const assignedCategory = categories.find(category => category.category === record.category)
          record.categoryIcon = assignedCategory.categoryIcon
          return record.save()
        })
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Record.findOne({ _id, userId })
    .then(record => record.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// export module
module.exports = router
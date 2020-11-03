// include Express and Express router
const express = require('express')
const Record = require('../../models/record')
const router = express.Router()

// set routes
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const record = req.body
  return Record.create({
    "name": record.name,
    "date": record.date,
    "category": record.category,
    "amount": record.amount
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// export module
module.exports = router
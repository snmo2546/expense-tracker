// include Express and Express router
const express = require('express')
const Record = require('../../models/record')
const router = express.Router()

router.get('/', (req, res) => {
  Record.find()
    .lean()
    .then(records => res.render('index', { records }))
    .catch(error => console.log(error))
})

module.exports = router
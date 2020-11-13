// include Express and Express router
const express = require('express')
const router = express.Router()

// Set routes
router.get('/login', (req, res) => {
  res.render('login')
})

// Export module
module.exports = router


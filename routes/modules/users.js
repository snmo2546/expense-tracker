// include Express and Express router
const express = require('express')
const router = express.Router()

// Set routes
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {

})

router.get('/register', (req, res) => {
  res.render('register')
})

// Export module
module.exports = router


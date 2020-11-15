// include Express and Express Router
const express = require('express')
const router = express.Router()

const passport = require('passport')

// set routes
router.get('/facebook', passport.authenticate('facebook', {
  scope: ['email', 'public_profile']
}))

router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: 'users/login'
}))

// export module
module.exports = router
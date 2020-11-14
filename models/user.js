// include Mongoose and Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// declare data structure
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// export module
module.exports = mongoose.model('User', userSchema)
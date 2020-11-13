const { text } = require('body-parser')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
  },
  category: {
    type: String,
  },
  categoryIcon: {
    type: String,
  },
  amount: {
    type: Number,
  }, 
  merchant: {
    type: String,
  }
})

module.exports = mongoose.model('Record', recordSchema)
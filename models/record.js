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
  categoryName: {
    type: String,
  },
  categoryIcon: {
    type: String,
  },
  amount: {
    type: Number,
  }
})

module.exports = mongoose.model('Record', recordSchema)
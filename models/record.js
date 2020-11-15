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
  }, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})

module.exports = mongoose.model('Record', recordSchema)
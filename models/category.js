const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  dataType: {
    type: String
  },
  categoryName: {
    type: String,
    required: true
  },
  categoryIcon: {
    type: String
  }
})

module.exports = mongoose.model('Category', categorySchema)
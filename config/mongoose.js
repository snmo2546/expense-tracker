// include Mongoose
const mongoose = require('mongoose')

// connect Mongodb
mongoose.connect('mongodb://localhost/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true })

// get Mongodb connection status
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// export modules
module.exports = db
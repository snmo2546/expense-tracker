// include Mongoose
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

// connect Mongodb
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

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
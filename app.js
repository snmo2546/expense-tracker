// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = porcess.env.PORT || 3000

// register express-handlebars helper
const hbs = exphbs.create({
  defaultlayout: 'main',
  helpers: {
    equals: function (value1, value2) { return (value1 === value2) }
  }
})

// set template engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// set static files
app.use(express.static('public'))

// process requests with routers
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

// start Express server and listen for connections
app.listen(PORT, () => {
  console.log(`Expense tracker is running on http://localhost:${PORT}`)
})
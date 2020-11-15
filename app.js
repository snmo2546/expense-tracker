// include packages and define server related variables
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const routes = require('./routes')
const usePassport = require('./config/passport')
require('./config/mongoose')

const app = express()
const PORT = process.env.PORT || 3000

// register express-handlebars helper
const hbs = exphbs.create({
  defaultlayout: 'main',
  helpers: {
    isSelected: function (value1, value2) { return value1 === value2 ? 'selected' : '' }
  }
})

// set template engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// set session
app.use(session({
  secret: 'GuanTzusSecret',
  resave: false,
  saveUninitialized: true
}))

// set static files
app.use(express.static('public'))

// process requests with routers
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

usePassport(app)

app.use(routes)

// start Express server and listen for connections
app.listen(PORT, () => {
  console.log(`Expense tracker is running on http://localhost:${PORT}`)
})
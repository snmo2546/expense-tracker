// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// process requests with routers
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

// start Express server and listen for connections
app.listen(port, () => {
  console.log(`Expense tracker is running on http://localhost:${port}`)
})
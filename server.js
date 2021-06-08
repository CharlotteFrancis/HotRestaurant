const express = require('express')
const { join } = require('path')
const { uid } = require('uid')
const app = express()

// const apiRoute = require('./routes/apiRoute.js')
// apiRoute(app)
// apiRoute(app).get

// variables to hold the data
let tables = require('./db/tableData.js'), waitingList = require('./db/waitinglistData.js')

// 3 lines we have to include haha
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// copied code from solution, routes to app?
require("./routes/apiRoutes.js")(app)
require("./routes/htmlRoutes.js")(app)

// this line runs our server, the variable is for Heroku deployment, number is for localhost
app.listen(process.env.PORT || 3000, () => {
  if (process.env.PORT) {

  } else {
    console.log('Listening at port 3000...')
  }
})

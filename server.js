const express = require('express')
const { join } = require('path')
const { uid } = require('uid')
const app = express()

// variables to hold the data
let tables = require('./db/tableData.js'), waitingList = require('./db/waitinglistData.js')

// 3 lines we have to include haha
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(3000)

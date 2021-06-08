const express = require('express')
const { join } = require('path')
const { uid } = require('uid')
const app = express()

// 3 lines we have to include haha
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


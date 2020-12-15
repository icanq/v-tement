require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const app = express()

// require('./config/mongoose')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

module.exports = app
const express = require('express')
const cors = require('cors')
const users = require('./routes/users.routes.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/api', users)

module.exports = app

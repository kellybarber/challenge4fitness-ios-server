const express = require('express')
const db      = require('./db.js')
const app     = express()



app.listen(3001, () => { console.log('App listening on port 3001') })

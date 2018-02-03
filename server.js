const express = require('express')
const db      = require('./db.js')
const app     = express()

app.use('/challenge', require('./routes/challenge.js'))

app.get('/', (req, res) => {
  res.send('wassup')
})

app.listen(3001, () => { console.log('App listening on port 3001') })

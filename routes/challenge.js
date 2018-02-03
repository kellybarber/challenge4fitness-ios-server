const router = require('express').Router()
const json   = require('../challenge.json')

router.get('/', (req, res) => {
  res.json(json)
})

module.exports = router

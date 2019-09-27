const router = require('express').Router()
const axios = require('axios')
const Title = require('./db/models/storedTitles')

router.post('/', async (req, res) => {
  try{
    res.send({
      message: `ive received your request to analyze ${req.body.title}, woohoo`
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router

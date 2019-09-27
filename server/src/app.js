const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const cors = require('cors')

//body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
//static middleware


app.get('/', (req, res) => res.send('I think this is working not sure'))

app.post('/analyze', (req, res) => {
  res.send({
    message: `ive received your request to analyze ${req.body.title}, woohoo`
  })
})

app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app

const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const cors = require('cors')
const db = require('./db')

//body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
//static middleware

app.use('/analyze', require('./analyze'))

app.get('/', (req, res) => res.send('I think this is working not sure'))


db.sync()
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`))
  })

module.exports = app

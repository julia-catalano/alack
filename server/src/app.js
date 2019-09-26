const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

//body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//static middleware


app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app

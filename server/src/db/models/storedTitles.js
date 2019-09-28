const Sequelize = require('sequelize')
const db = require('../db')

const Title = db.define('title', {
  title: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.TEXT
  },
  bookUrl : {
    type: Sequelize.STRING
  },
  year: {
    type: Sequelize.INTEGER
  },
  sentimentRank: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Title

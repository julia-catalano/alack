const router = require('express').Router()
const axios = require('axios')
const Title = require('./db/models/storedTitles')
const language = require('@google-cloud/language')
require('dotenv').config()

async function quickstart() {
  // Imports the Google Cloud client library


  // Instantiates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze
  const text = 'Hello, world!';

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}

quickstart()

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

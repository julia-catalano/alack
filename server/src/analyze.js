const router = require('express').Router()
require('dotenv').config()
const Title = require('./db/models/storedTitles')
const language = require('@google-cloud/language')


async function quickstart(inputText) {
  // Imports the Google Cloud client library


  // Instantiates a client
  const client = new language.LanguageServiceClient();

  // The text to analyze

  const text = inputText;

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;
  return sentiment
  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}


router.post('/', async (req, res) => {
try {
  console.log('this is the body', req.body.title)
  const data = await Title.findOne({
    where: {
      title: req.body.title
    }
  })
  console.log(data.author, data.bookUrl, data.title)
  const response = await quickstart(data.text)
  console.log('response', response)
  const sendThis = {
    title: data.title,
    author: data.author,
    bookUrl: data.bookUrl,
    magnitude: response.magnitude,
    score: response.score
  }
  console.log(sendThis)
  res.json(sendThis)
  } catch (error) {
    res.status(400).send(`Sorry, I can't read that one right now!`)
  }
})

module.exports = router

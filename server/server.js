const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const stubData = require('./data.json')

const app = express()
const port = process.env.PORT || 4040

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/questions', (req, res) => {
  const surveyId = req.query.surveyId
  res.json(stubData.survey)
})

app.post('/responses', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2))
  res.status(200).end()
})

app.listen(port, () => console.log(`Listening on port ${port}!`))

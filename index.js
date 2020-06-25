// just a configured version of yogurtsyums' qbot

const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.sendStatus(200)
})

let listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port:' + listener.address().port)
})

// lol im dumb ima pick this up in the morining

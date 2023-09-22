const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const port = 3000
const corsOption = {
    origin: ['http://localhost:8080'],
}

app.use(cors(corsOption))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
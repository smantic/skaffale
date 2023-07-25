const express = require('express')
const cors = require('cors');
const fs = require('fs')
const app = express()
const port = 3000

const corsOption = {
    origin: ['http://localhost:8080'],
};
app.use(cors(corsOption))

app.get('/getJsonList', (req, res) => {
  res.send(JSON.parse(fs.readFileSync("./list.json").toString()))
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
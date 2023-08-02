const express = require('express')
const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser');
const { JsonDB, Config } = require('node-json-db')
const app = express()
const port = 3000
var db = new JsonDB(new Config("database", true, true, '/'))

const corsOption = {
    origin: ['http://localhost:8080'],
}
app.use(cors(corsOption))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var db = new JsonDB(new Config("database", true, true, '/'));

app.get('/libraries', async (req, res) => {
    res.send(await db.getData("/libraries"))
})

function checkRequiredParameters (jsonBody) {
    return new Promise( (resolve) => {
        const requiredProperties = [ 'name', 'description', 'language' ]
        for (let prop of requiredProperties) {
            if (! jsonBody.hasOwnProperty(prop)) {
                resolve(false)
            }
        }
        resolve(true)
    })
}

app.post('/newLibrary', async (req, res) => {
    if (await checkRequiredParameters(req.body)) {
        const data = await db.getData("/libraries")
        data.push(req.body)
        await db.push('/libraries', data)
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
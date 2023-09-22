const express = require('express')
const router = express.Router()

router.get('/libraries', async (req, res) => {
    // TO-DO
    res.send(await db.getData("/libraries"))
})

router.get('/projects', async (req, res) => {
    // TO-DO
    res.send(await db.getData("/projects"))
})

router.post('/newLibrary', async (req, res) => {
    // TO-DO
    if (await checkRequiredParameters(req.body)) {
        const data = await db.getData("/libraries")
        data.push(req.body)
        await db.push('/libraries', data)
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
})

router.post('/newProject', async (req, res) => {
    // TO-DO
    if (await checkRequiredParameters(req.body)) {
        const data = await db.getData("/projects")
        data.push(req.body)
        await db.push('/projects', data)
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
})

module.exports = router
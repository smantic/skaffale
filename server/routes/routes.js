const checkRequiredParameters = require('../utils/validateInputs')
const express = require('express')
const Libraries = require('../database/models/libraries')
const Projects = require('../database/models/projects')
const router = express.Router()
const sequelize = require("../database/connection/connection")
const uuid = require('uuid').v4

router.get('/libraries', async (req, res) => {
    sequelize.sync().then(() => {
        Libraries.findAll().then(result => {
            res.send(result)
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error)
            res.sendStatus(500)
        })
    }).catch((error) => {
        console.error('Unable to get table : ', error)
        res.sendStatus(500)
    })
})

router.get('/projects', async (req, res) => {
    sequelize.sync().then(() => {
        Projects.findAll().then(result => {
            res.send(result)
            res.sendStatus(200)
        }).catch((error) => {
            console.error('Failed to get data : ', error)
            res.sendStatus(500)
        })
    }).catch((error) => {
        console.error('Unable to get table : ', error)
        res.sendStatus(500)
    })
})

router.post('/newLibrary', async (req, res) => {
    if (await checkRequiredParameters(req.body)) {
        sequelize.sync().then(() => {
            Library.create({ ...req.body, id: uuid() }).then(result => {
                res.sendStatus(200)
            }).catch((error) => {
                console.error('Failed to create a new record : ', error)
                res.sendStatus(500)
            })
        }).catch((error) => {
            console.error('Unable to create table : ', error)
            res.sendStatus(500)
        })
    } else {
        res.sendStatus(500)
    }
})

router.post('/newProject', async (req, res) => {
    if (await checkRequiredParameters(req.body)) {
        sequelize.sync().then(() => {
            Projects.create({ ...req.body, id: uuid() }).then(result => {
                res.sendStatus(200)
            }).catch((error) => {
                console.error('Failed to create a new record : ', error)
                res.sendStatus(500)
            })
        }).catch((error) => {
            console.error('Unable to create table : ', error)
            res.sendStatus(500)
        })
    } else {
        res.sendStatus(500)
    }
})

module.exports = router
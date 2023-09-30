// This script should be run to set up the database with the minimal rows and tables.
const sequelize = require("../connection/connection")
const uuid = require('uuid').v4
const Libraries = require('../models/libraries')
const Projects = require('../models/projects')
const defaultLibrariesData = require('../default/defaultLibrariesData.json')

sequelize.sync({ force: true }).catch( error => {
    console.error(`Failed to create table in ${process.env.POSTGRES_DATABASE}`)
    console.error(error)
}).then(() => {
    for (let obj of defaultLibrariesData.libraries) {
        console.log(`Adding new Libraries row for ${obj.name}`)
        Libraries.create({ id: uuid(), ...obj })
    }
    console.log(`Tables created in ${process.env.POSTGRES_DATABASE}`)
})

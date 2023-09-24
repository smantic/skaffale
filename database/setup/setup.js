require('dotenv').config({path: '../.env'})
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  { host: 'localhost', dialect: 'postgres' }
)
const Libraries = require('../models/libraries')
const Projects = require('../models/projects')

sequelize.sync({ force: true }).catch( error => {
    console.error(`Failed to create Library table in ${process.env.POSTGRES_DATABASE}`)
    console.error(error)
    process.exit(1)
}).then(() => {
    console.log(`Library table created in ${process.env.POSTGRES_DATABASE}`)
    process.exit(0)
})
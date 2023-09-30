require('dotenv').config({path: __dirname + '/./../../.env'})
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    { host: 'localhost', port: 5432, dialect: 'postgres' }
)

module.exports = sequelize
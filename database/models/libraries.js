require('dotenv').config({path: '../.env'})
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    { host: 'localhost', dialect: 'postgres' }
)
const defaultLibrariesData = require('../default/defaultLibrariesData.json')
const uuid = require('uuid').v4

const Libraries = sequelize.define( 'Libraries', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
    },
    logo: {
        type: DataTypes.STRING,
    },
    language: {
        type: DataTypes.STRING,
    },
    package_url: {
        type: DataTypes.STRING,
    },
    latest_version: {
        type: DataTypes.STRING,
    },
    website: {
        type: DataTypes.STRING,
    },
    github: {
        type: DataTypes.STRING
    },
    stars_review: {
        type: DataTypes.STRING
    },
  }
)

defaultLibrariesData.libraries.forEach(async (obj) => {
    obj.id = uuid()
    Libraries.create(obj)
})

module.exports = Libraries
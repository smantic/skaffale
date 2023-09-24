require('dotenv').config({path: '../.env'})
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    { host: 'localhost', dialect: 'postgres' }
)
const uuid = require('uuid').v4

const Projects = sequelize.define( 'Projects', {
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

module.exports = Projects
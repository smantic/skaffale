const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    { host: 'database', dialect: 'postgres' }
)

module.exports = sequelize
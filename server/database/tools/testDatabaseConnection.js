require('dotenv').config({path: __dirname + '/./../../.env'})
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize( process.env.POSTGRES_DATABASE, 
                                 process.env.POSTGRES_USER,
                                 process.env.POSTGRES_PASSWORD, 
                                 { host: 'localhost', dialect: 'postgres'} )

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
        process.exit(0)
    } catch (error) {
        console.error('Unable to connect to the database:', error)
        process.exit(1)
    }
}

testConnection()
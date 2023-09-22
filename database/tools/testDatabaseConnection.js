require('dotenv').config({path: '../.env'})
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize( process.env.POSTGRES_DATABASE, 
                                 process.env.POSTGRES_USER,
                                 process.env.POSTGRES_PASSWORD, 
                                 { host: 'localhost', dialect: 'postgres'} )

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection()
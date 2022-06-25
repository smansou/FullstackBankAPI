const dotenv = require('dotenv');
dotenv.config();


const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const SERVER_PORT = process.env.SERVER_PORT;
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.rqdkvrz.mongodb.net/?retryWrites=true&w=majority`;



 const config = { 
    mongo: {
        url:MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
}

module.exports = config;
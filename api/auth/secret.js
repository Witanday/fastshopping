require('dotenv').config()

module.exports ={
    database : process.env.DB_URL_HOST,
    port : process.env.PORT,
    secretKey :process.env.SECRET_KEY
}
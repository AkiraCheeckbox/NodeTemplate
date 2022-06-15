require('dotenv').config()
module.exports = {
    host: process.env.HOST,
    username: process.env.DBUSERNAME,
    dbname: process.env.DBNAME,
    dbpassword: process.env.DBPASSWORD,
    stripe_key: process.env.STRIPE_KEY
}
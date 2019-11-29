require("dotenv").config()

module.exports = {
    PORT: 5000 || process.env.PORT, 
    DATABASE: process.env.DATABASE ,
    DATABASE_NAME: process.env.DATABASE_NAME 

}

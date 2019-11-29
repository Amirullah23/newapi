const {PORT, DATABASE, DATABASE_NAME} = require("./environment")
const db = require("./connectios")

module.exports = {
    PORT: PORT,
    DATABASE: DATABASE,
    DATABASE_NAME: DATABASE_NAME,
    db: db


}
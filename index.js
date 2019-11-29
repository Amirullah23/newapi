const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const {PORT, db, DATABASE } = require('./config')


app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use("/user", require("./user"))
app.use("/todo", require("./todos"))


console.log(DATABASE);

if (db) {
    app.listen(PORT, () => {
        console.log(`THIS APP USING PORT ${PORT}`)
    })
        

}




const express = require('express')
const app = express()
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const morgans = require("morgan")
const cors = require("cors")
const port = 7890


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgans("short"))
app.use(cors())



BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

app.use(`/api`, require("./routes"))

prisma.$connect().then(() => {
    console.log("Database Conected")
}).catch(() => {
    console.log("Database NOT Conected")
})

app.listen(port, () => {
    console.log(`Perpustakaan app listening on port ${port} `)
})
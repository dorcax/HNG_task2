const express = require("express")
const app = express()
const connectDb = require("./connectDb/connectDB")
require("dotenv").config()
const port = process.env.PORT || 3000
const errorHandler =require("./error/errorHandlers")
const router =require("./Router/router")
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use("/api", router)

app.use(errorHandler)

const start = async () => {
    await connectDb(process.env.MONGO_URL)
    app.listen(port,() => {
        console.log(`Server is listening on port ${port}`)
    })
}
start()
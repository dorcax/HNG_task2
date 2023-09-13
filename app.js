const express = require("express")
const app = express()
// const connectDb = require("./connectDb/connectDB")
const connectDB =require("./connectDb/connectDB")
require("dotenv").config({path:__dirname+'/.env'})
const port = process.env.PORT || 3000
const errorHandler =require("./error/errorHandlers")
const router =require("./Router/router")
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use("/api", router)

app.use(errorHandler)


const start = async () => {
    await connectDB(process.env.MONGO_URL);
    console.log(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};
start();
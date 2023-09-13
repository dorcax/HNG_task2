const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config().parsed;
const mongoose =require("mongoose")
const port = process.env.PORT || 3000
const errorHandler =require("./error/errorHandlers")
const router = require("./Router/router")
const source =process.env.MONGO_URL
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
 mongoose.connect(source, {  useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => {
      console.log("connected to the DB");
    })
    .catch((error) => {
      console.log(error);
    });
app.use("/api", router);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  })
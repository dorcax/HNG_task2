const express = require("express")
const app = express()
require("dotenv").config()
const port = process.env.PORT || 3000
const errorHandler =require("./error/errorHandlers")
const router =require("./Router/router")
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.use("/api", router)




 mongoose.connect(process.env.MONGO_URL, {  useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => {
      console.log("connected to the DB");
    })
    .catch((error) => {
      console.log(error);
    });

app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  })
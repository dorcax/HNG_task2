
const mongoose = require("mongoose")

const connectDB = (url) => {
 mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to the DB");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connectDB;
const mongoose = require("mongoose")

const connectDb = (url) => {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
        console.log("connect to Db")
        }).catch(() => {
        console.log('unable to connect to the Db')
    })
}
module.exports =connectDb
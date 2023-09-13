const { ApiError } = require("./ApiError")

const errorHandler = (err, req, res,next) => {
   
     return res.status(err.statusCode).json({msg:err.message})
}
module.exports = errorHandler
const express = require("express")
const router = express.Router()
const{createUser,getUser,updateUser,deleteUser} =require("../controller/controller")

router.route("/").post(createUser)
     

   
router.route("/:id").get(getUser)
    .put(updateUser)
    .delete(deleteUser);
   
     


module.exports =router
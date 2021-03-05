const express = require("express");
var userModel = require("../model/userModel");
var router = express.Router();

var { addUser, getUser, addAddress ,user} = require("../controller/usercontroller");

router.post("/addUser", addUser);
router.post("/addAddress/:id", addAddress);

router.get("/getUser/:id", getUser);

router.post("/login",async(req,res)=>{

    try{
    const user = await userModel.findByCredentials(req.body.email,req.body.password)
    const token = await user.generateAuthToken();
   
   res.send({user,token});
   }
   catch(e)
   {
     res.status(400).send(e);
   }})

module.exports = router;

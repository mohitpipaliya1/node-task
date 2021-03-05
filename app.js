const express = require("express");
var userModel = require("./model/userModel");
const app = express();
app.use(express.json());

require("./db");
const myRoute = require("./route/user");




app.use((req,res,next)=>{
  
  if (req.method=="GET")
  {
    console.log("get request not accepted")
  }
  else{
    next()
  }
})



app.use("/user", myRoute);

module.exports=app;

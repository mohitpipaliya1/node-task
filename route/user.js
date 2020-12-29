const express = require("express");
var router = express.Router();

var { addUser, getUser, addAddress } = require("../controller/usercontroller");

router.post("/addUser", addUser);
router.post("/addAddress/:id", addAddress);

router.get("/getUser/:id", getUser);

module.exports = router;

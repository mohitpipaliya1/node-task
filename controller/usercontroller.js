var userModel = require("../model/userModel");
var Address = require("../model/address");
const addUser = async (req, res) => {
  var data = new userModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    contactNumber: req.body.contactNumber,
    role: req.body.role,
  });

  try {
    const newUser = await data.save();
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const addAddress = async (req, res) => {
  var data = new Address({
    AddressLine1: req.body.AddressLine1,
    AddressLine2: req.body.AddressLine2,
    pin: req.body.pin,
    state: req.body.state,
    city: req.body.city,
  });

  try {
    const address = await data.save();
    let userData = await userModel.findOne({ _id: req.params.id });
    userData.Address.push(address._id);
    userData.save();
    res.status(201).json({ address });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  let userData = await userModel
    .findOne({ _id: req.params.id })
    .populate("Address")
    .exec();
  res.send({ data: userData });
};

module.exports = { addUser, getUser, addAddress };

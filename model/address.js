var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Address = new Schema(
  {
    AddressLine1: String,
    AddressLine2: String,
    pin: Number,
    state: String,
    city: String,
  }
);

var Address = mongoose.model("Address", Address);

module.exports = Address;

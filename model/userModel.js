var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
    contactNumber: String,
    role: {
      type: String,
      enum: ["admin", "user"],
    },
    Address: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
    ]
  }
  
);

var UserModel = mongoose.model("userData", UserSchema);

module.exports = UserModel;

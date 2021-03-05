var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')


var UserSchema = new Schema(
  {
    name: String,
    email: { type: String, unique: true ,required:true},
    password: {type:String,required:true,trim:true},
    contactNumber: String,
    role: {
      type: String,
      enum: ["admin", "user"],
    },
    tokens: [{
      token: {
          type: String,
          required: true
      }
  }],
    Address: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
    ]
  }
  
);

UserSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)

  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}

UserSchema.statics.findByCredentials= async (email,password)=>{
          const user = await UserModel.findOne({email})
          console.log(user)
          if(!user)
          {
            throw new Error("unale to login");
          }

          const match = await bcrypt.compare(password,user.password)
          console.log("fhhg")
          if(!match)
          {
            throw new Error("unable to login")
          }
          
          return user;
        }
UserSchema.pre("save",async function(next){
          const user = this
          if(user.isModified("password"))
            {
              user.password= await bcrypt.hash(user.password,8) 
            }
            next()
})

var UserModel = mongoose.model("userData", UserSchema);

module.exports = UserModel;

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  name:{
        type:String,
        required:true
  },
  email:{
    type: String,
    required : true
  },
  password:{
    type: String,
    required : true
  },
  dob:{
    type:String,
  },
  tokens:[
    {
      token:{
        type: String,
        required: true
      }
    }
  ]
})

//we are hasshing the password

adminSchema.pre('save',async function(next){
  console.log("Hi from pre");
  if(this.isModified('password')){
    this.password= await bcrypt.hash(this.password, 12);
    this.cpassword= await bcrypt.hash(this.cpassword,12);
  }
  next();
})


//generating token
adminSchema.methods.generateAuthToken = async function(){
  // try{
  //   let token = jwt.sign({_id:this._id}, process.env.SECREAT_KEY);
  //   this.tokens = this.tokens.concat({token:token});
  //   await this.save();
  //   return token;
  // }catch(err){
  //   console.log(err)
  // }

  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    "thisisuserverification"
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
}

const Admin = mongoose.model('ADMIN',adminSchema);
module.exports = Admin;

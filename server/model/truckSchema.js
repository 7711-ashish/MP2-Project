const mongoose = require("mongoose");


const truckSchema = new mongoose.Schema({
  name:{
    type: String,
    required : true
  },
  number:{
    type: String,
    required : true
  },
  pickupcity:{
    type: String,
    required : true
  },
  dropcity:{
    type: String,
    required : true
  },
  company:{
    type: String,
    required : true
  },
  capacitty:{
      type: Number,
      required: true
  },
  typeoftruck:{
    type: String,
    required : true
  },
  status:{
      type: Boolean,
      required: true
  },
  price:{
      type: Number,
  },
  transemail:{
    type: String,
    required: true
  }
})


const Truck = mongoose.model('TRUCK',truckSchema);
module.exports = Truck;
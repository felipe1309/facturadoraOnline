import { models, Schema, model } from "mongoose";
const User = new Schema({
  key:{
    type:Number,
    required:true,
    max:9999,
    unique:false
  },
  password:{
    type:String,
    required:true,
    trim:true
  },
  typeUser:{
    type:String,
    enum: ['admin','user']
  }
},{
  versionKey:false,
  timestamps:true
});
export default models.User || model('User',User)
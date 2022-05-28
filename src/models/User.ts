import { models, Schema, model } from "mongoose";
export const User = new Schema({
  key:{
      type:Number,
      required:true,
      trim:true,
      maxlength:4,
      minlength:4
  },
  password:{
      type:String,
      required:true,
      trim:true
  },
  typeUser:{
      type:String,
      enum: ['admin','user'],
  }
},{
  versionKey:false,
  timestamps:true
});
export default models.User || model('User',User)
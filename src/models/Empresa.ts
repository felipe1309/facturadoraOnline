import { models, Schema, model } from "mongoose";
import validator from "validator";
import User from "./User";
import Product from "./Product";
import FacturaVenta from "./FacturaVenta";
import FacturaCompra from "./FacturaCompra";
const Empresa = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validator.isEmail, "Please fill a valid email address"]
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    listUsers:{
      type: [User.schema],
      required:true,
      default:[]
    },
    listProduct:{
      type:[Product.schema],
      required:true,
      default:[]
    },
    listFacturaVenta:{
      type:[FacturaVenta.schema],
      required:true,
      default:[]
    },
    listFacturaCompra:{
      type:[FacturaCompra.schema],
      required:true,
      default:[]
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default models.Empresas || model("Empresas", Empresa);

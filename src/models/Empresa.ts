import { models, Schema, model } from 'mongoose'
import validator from 'validator'
import { User } from './User'
import { Product } from './Product'
import { facturaCompra } from './FacturaCompra'
import { facturaVenta } from './FacturaVenta'
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
      validate: [validator.isEmail, 'Please fill a valid email address']
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    listUser: {
      type: [User],
      required: true,
      default: []
    },
    listProducts: {
      type: [Product],
      required: true,
      default: []
    },
    listaFacturaVentas:{
      type:[facturaVenta],
      required:true,
      default:[]
    },
    listaFacturaCompras:{
      type:[facturaCompra],
      required:true,
      default:[]
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
)
export default models.Empresas || model('Empresas', Empresa)

import { models, Schema, model } from 'mongoose'
export const Product = new Schema({
  nombre: {
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  descripcion: {
    required: true,
    trim: true,
    lowercase: true
  },
  precioVenta: {
    type: Number,
    required: true
  },
  precioCompra: {
    type: Number,
    required: true
  },
  cantidad: {
    type: Number,
    required: true,
    default: 0
  }
})
export default models.Products || model('Products', Product)

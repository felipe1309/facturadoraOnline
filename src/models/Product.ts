import { models, Schema, model } from "mongoose";
export const Product = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
      trim: true,
    },
    precioCompra: {
      type: Number,
      required: true,
      trim: true,
    },
    precioVenta: {
      type: Number,
      required: true,
      trim: true,
    },
    cantidad: {
      type: Number,
      required: true,
      default: 1,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
export default models.Products || model("Products", Product);

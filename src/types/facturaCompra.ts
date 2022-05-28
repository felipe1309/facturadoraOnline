import { productoCompra } from "./producto";
export interface facturaCompra {
  productosVendidos: productoCompra[];
  total:number,
  _id:string
}

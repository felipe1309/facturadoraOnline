export interface producto {
  nombre: string;
  descripcion: string;
  precioVenta: number;
  precioCompra: number;
  cantidad: number;
  _id:string
}
export type productoCompra = Pick<producto, "_id" | "cantidad">;

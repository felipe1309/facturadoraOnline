export interface empresa {
  nombre: string;
  password: string;
  email: string;
  listUsers: string[];
  listProduct: string[];
  listFacuturaCompra: string[];
  listFacturaVenta: string[];
  _id: string
}
export type empresaSinId = Omit<empresa, "_id">
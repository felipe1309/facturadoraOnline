import { producto } from "../../types/producto";
import { validadorNumbre } from "./validadorNumber";
import { validadorString } from "./validadorString";

type returValidadorProducto = {
  Producto: producto;
  validate: boolean;
};
/**
 * 
 * @param producto un objeto de cualquier tipo
 * @returns retorna un objeto de tipo producto o un error en caso de que no sea un objeto de tipo producto el parametro de entrada
 */
function validadorProducto(producto: any) {
  const { nombre, _id, precioVenta, precioCompra, cantidad, descripcion } =
    producto;
  const nombreProducto = validadorString(nombre);
  const _idProducto = validadorString(_id);
  const descripcionProducto = validadorString(descripcion);
  const precioVentaProducto = validadorNumbre(precioVenta);
  const precioCompraProducto = validadorNumbre(precioCompra);
  const cantidadProducto = validadorNumbre(cantidad);
  return {
    Producto: {
      nombre: nombreProducto,
      _id: _idProducto,
      descripcion: descripcionProducto,
      precioVenta: precioVentaProducto,
      precioCompra: precioCompraProducto,
      cantidad: cantidadProducto,
    },
    validate: true,
  };
}
/**
 * 
 * @param listProductos un objeto de cualquier tipo
 * @returns retorna una lista de objetos de tipo producto o un error en caso de que no sea una lista de objetos de tipo producto el parametro de entrada
 */
function validadorListaProductos(listProductos: any): producto[] {
  if (Array.isArray(listProductos)) {
    listProductos.forEach((product: any) => {
      if (!validadorProducto(product).validate) {
        throw new Error("Error en la lista de productos");
      }
    });
    return listProductos as producto[];
  }
  throw new Error("Error en la lista de usuarios");
}

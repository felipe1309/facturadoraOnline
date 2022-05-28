import { empresaSinId } from "../../types/empresa";
import { validadorString, validadorListaString } from "./validadorString";
export function validadorDeEmpresa(empresa: any): empresaSinId {
  const {
    nombre,
    password,
    email,
    listUsers,
    listProduct,
    listFacturaCompra,
    listFacturaVenta,
  } = empresa;
  const nombreEmpresa = validadorString(nombre);
  const passwordEmpresa = validadorString(password);
  const emailEmpresa = validadorString(email);
  const listUsersEmpresa = validadorListaString(listUsers);
  const listProductEmpresa = validadorListaString(listProduct);
  const listFacturaVentaEmpresa = validadorListaString(listFacturaVenta);
  const listFacturaCompraEmpresa = validadorListaString(listFacturaCompra);
  return {
    nombre: nombreEmpresa,
    password: passwordEmpresa,
    email: emailEmpresa,
    listUsers: listUsersEmpresa,
    listProduct: listProductEmpresa,
    listFacuturaCompra: listFacturaCompraEmpresa,
    listFacturaVenta: listFacturaVentaEmpresa,
  };
}

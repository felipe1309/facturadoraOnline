import { empresaSinId } from "../../types/empresa";
import { validadorListaUsers } from "./validadorDeUsers";
import { validadorString } from "./validadorString";
/**
 * 
 * @param empresa un objote de cualquiertipo
 * @returns retorna un objeto de tipo empresa sin id o un error en caso de que no sea un objeto de tipo empresa el parametro de entrada
 */
export function validadorDeEmpresa(empresa: any): empresaSinId | undefined{
  try {
    const {
      nombre,
      password,
      email,
      listUsers
    } = empresa;
    const nombreEmpresa = validadorString(nombre);
    const passwordEmpresa = validadorString(password);
    const emailEmpresa = validadorString(email);
    const listUsersEmpresa = validadorListaUsers(listUsers);
    return {
      nombre: nombreEmpresa,
      password: passwordEmpresa,
      email: emailEmpresa,
      listUsers: listUsersEmpresa
    };
    
  } catch (error) {
    throw new Error("user input error");
  }
}

import { user, userSinId, userTypes } from "../../types/user";
import { validadorNumbre } from "./validadorNumber";
import { validadorString } from "./validadorString";
/**
 *
 * @param typeUser un objeto de cualquier tipo
 * @returns retorna un objeto de tipo user o un error en caso de que no sea un objeto de tipo user el parametro de entrada
 */
function validadorTypeUser(typeUser: any): userTypes {
  if (typeUser === "admin" || typeUser === "user") {
    return typeUser as userTypes;
  }
  throw new Error(`${typeUser} no es un tipo de usuario valido`);
}
/**
 *
 * @param user un objeto de cualquier tipo
 * @returns retorna un objeto de tipo user sin id o un error en caso de que no sea un objeto de tipo user el parametro de entrada
 */
export function validadorUser(user: any): userSinId {
  const { key, password, typeUser } = user;
  const keyUser = validadorNumbre(key);
  const passwordUser = validadorString(password);
  const typeUserUser = validadorTypeUser(typeUser);
  return {
    key: keyUser,
    password: passwordUser,
    typeUser: typeUserUser,
  };
}
export const validadorListaUsers = (listUsers: any): userSinId[] => {
  if (!Array.isArray(listUsers)) {
    throw new Error("listUsers no es un array");
  }
  return listUsers.map((user) => validadorUser(user)) as userSinId[];
};

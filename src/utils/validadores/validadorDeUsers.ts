import { user, userSinId, userTypes } from "../../types/user";
import { validadorNumbre } from "./validadorNumber";
import { validadorString } from "./validadorString";

function validadorTypeUser(typeUser: any): userTypes {
  if (typeUser === "admin" || typeUser === "user") {
    return typeUser as userTypes
  }
  throw new Error(`${typeUser} no es un tipo de usuario valido`);
}
export function validadorUser(user: any):userSinId {
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

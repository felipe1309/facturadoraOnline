import { useMutation } from "@apollo/client";
import { gql } from "apollo-server-micro";
import { useEffect } from "react";
import { useContexto } from "./useContexto";
const LogUpMutation = gql`
  mutation pruevaM($nombre: String!, $email: String!, $password: String!) {
    LogUp(nombre: $nombre, email: $email, password: $password) {
      token
    }
  }
`;
export const useLog = () => {
  const { LogOut } = useContexto();
  const [logUp, dataLogUp] = useMutation(LogUpMutation);
  useEffect(() => {
      console.log(dataLogUp);
    if (dataLogUp.data) {
      LogOut(dataLogUp.data.LogUp.token, true);
    }
  }, [dataLogUp.data]);

  /**
   * funcion para loguearse y guardar el token en local
   * @param nombre
   * @param email
   * @param password
   * @returns
   */
  const LogUp = (
    nombre: string,
    email: string,
    password: string,
    guardar: boolean
  ): void => {
    logUp({
      variables: {
        nombre,
        email,
        password,
      },
    });
  };
  return { LogUp };
};

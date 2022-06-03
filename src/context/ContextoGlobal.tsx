//compornts
import Head from "next/head";
//hooks
import { createContext, ReactElement } from "react";
import { useUser } from "../hooks/useUser";
import { userToken } from "../types/user";

//types
type stateAndFunctionOfContextGloval = {
  user: userToken;
  LogOut: (token: string, guardar: boolean) => void
};
type propsStateGlobal = {
  children: ReactElement;
};

export const ContextoGlobal = createContext<stateAndFunctionOfContextGloval>(
  {} as stateAndFunctionOfContextGloval
);

const contextoGlobal = ({ children }: propsStateGlobal) => {
  const { userToken,LogOut } = useUser();
  const data = {
    user: userToken,
    LogOut
  };
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>facturadora online</title>
      </Head>
      <ContextoGlobal.Provider value={data}>{children}</ContextoGlobal.Provider>
    </>
  );
};

export default contextoGlobal;

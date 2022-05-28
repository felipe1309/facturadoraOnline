//hooks
import { createContext, ReactElement } from "react";
import { useUser } from "../hooks/useUser";
import { userToken } from "../types/user";

//types
type stateAndFunctionOfContextGloval = {
  user: userToken;
};
type propsStateGlobal = {
  children: ReactElement;
};

export const ContextoGlobal = createContext<stateAndFunctionOfContextGloval>(
  {} as stateAndFunctionOfContextGloval
);

const contextoGlobal = ({ children }: propsStateGlobal) => {
  const { userToken } = useUser();
  const data = {
    user: userToken,
  };
  return (
    <ContextoGlobal.Provider value={data}>{children}</ContextoGlobal.Provider>
  );
};

export default contextoGlobal;

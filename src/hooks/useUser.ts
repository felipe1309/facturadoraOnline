import { useEffect, useState } from "react";
import { userToken } from "../types/user";
export function useUser() {
  const [userToken, setUserToken] = useState<userToken>({
    auth: undefined,
  });
  useEffect(() => {
    const userLocalStorage = window.localStorage.getItem("EmpreseToken") as
      | string
      | null;
    const userSessionStorage = window.sessionStorage.getItem("EmpreseToken") as
      | string
      | null;
    if (userLocalStorage) {
      setUserToken({
        auth: true,
        token: userLocalStorage,
      });
    } else if (typeof userSessionStorage == "string") {
      setUserToken({
        auth: true,
        token: userSessionStorage,
      });
    } else {
      setUserToken({
        auth: false,
        token: null,
      });
    }
  }, []);
  const LogOut = (token: string, guardar: boolean) => {
    setUserToken({
      auth: true,
      token,
    });
    if (guardar) {
      window.localStorage.setItem("EmpreseToken", token);
    } else {
      window.sessionStorage.setItem("EmpreseToken", token);
    }
  };
  return { userToken,LogOut };
}

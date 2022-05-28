import { useContext } from "react";
import { ContextoGlobal } from "../context/ContextoGlobal";
export function useContexto() {
  let contexto = useContext(ContextoGlobal);
  return contexto;
}

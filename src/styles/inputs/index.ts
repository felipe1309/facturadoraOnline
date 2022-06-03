import css from "styled-jsx/css";
import { colores } from "../globalTokensStyles";
export const inputGenericoStyle = css`
  div {
    width: 100%;
    height: 40px;
    margin-top: 12px;
    margin-bottom:12px
  }
  label {
    font-weight: bold;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    outline: none;
    background: white;
    padding: 0 10px;
    font-size: 1.1rem;
  }
  input:focus {
    outline: 2px solid ${colores.azul};
  }
`;
export const inputSubmitGenericoStyle = css`
  div {
    width: 100%;
    height: 40px;
    margin-top: 30px;
  }
  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px;
    outline: none;
    background: ${colores.azul};
    padding: 0 10px;
    font-size: 1.1rem;
    color: white;
  }
  input:focus {
    outline: 2px solid ${colores.cyan};
  }
`;

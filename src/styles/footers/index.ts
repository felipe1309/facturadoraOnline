import css from "styled-jsx/css";
import { colores } from "../globalTokensStyles";
export const footerInicioSecion = css`
  footer {
    width: 100%;
    height: 20%;
    padding: 0 20px;
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li {
    margin-top: 10px;
    text-align: center;
    font-size: 1.1rem;
    color: white;
  }
  a {
    font-size: 1.1rem;
    color: ${colores.vileta};
  }
`;

import css from "styled-jsx/css";

export const logUpPageStyle = css`
  main {
    width: 100%;
    height: 100%;
    position: relative;
  }
  @keyframes modal-form {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  form {
    width: 100%;
    height: 80%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fffa;
    animation: modal-form 0.5s ease-in-out;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
  }
`;

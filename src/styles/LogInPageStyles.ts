import css from "styled-jsx/css";

export const logInPageStyles = css`
  .container {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.7231267507002801) 0%,
      rgba(0, 212, 255, 0) 100%
    );
  }
  header {
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
  h2{
    font-size:2rem;
  }
  .logo {
    width: 40px;
    height: 40px;
    object-fit: contain;
    position: relative;
    margin-right: 10px;
  }
  main {
    height: 45%;
    padding: 0 20px;
    width: 100%;
  }
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .form__group {
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }
  span {
    color:white;
    font-size:1.2rem
  }
`;

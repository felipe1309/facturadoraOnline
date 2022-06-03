//components
import InputGenerico from "../../components/Inputs/InputGenerico";
import InputSubmitGenerico from "../../components/Inputs/InputSubmitGenerico";
import FooterInicioSecion from "../../components/Footers/FooterInicioSecion";
import Head from "next/head";
//hooks
import {useRouter} from "next/router";
import { useContexto } from "../../hooks/useContexto";
import { useEffect } from "react";
//types
import { GetStaticProps, NextPage } from "next";

//styles
import { logInPageStyles } from "../../styles/LogInPageStyles";
import PlantillaLog from "../../components/PlantillasFondo/PlantillaLog";

const LogIn: NextPage = () => {
  const router = useRouter();
  const { user } = useContexto();
  useEffect(() => {
    if (user.auth) {
      router.replace("/");
    }
  }, [user.auth]);
  return (
    <>
      <Head>
        <title>iniciar secion | facturadora online</title>
      </Head>
      <PlantillaLog alt="platilla-log-in" src="/img/plantilla-log-in.jpg">
        <header>
          <img className="logo" src="/img/logo.png" alt="logo" />
          <h2>facturadora online</h2>
        </header>
        <main>
          <form onSubmit={(e) => e.preventDefault()}>
            <InputGenerico
              require
              name="email"
              placeholder="correo electronico"
              typeInput="email"
            />
            <InputGenerico
              require
              name="password"
              placeholder="contraseña"
              typeInput="password"
            />

            <div className="form__group">
              <span>olvidaste tu contraseña ?</span>
            </div>
            <InputSubmitGenerico value="iniciar" />
          </form>
        </main>
        <FooterInicioSecion></FooterInicioSecion>
      </PlantillaLog>
      <style jsx>{logInPageStyles}</style>
    </>
  );
};
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
export default LogIn;

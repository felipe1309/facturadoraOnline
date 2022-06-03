//components
import CheckboxGenerico from "../../components/Inputs/CheckboxGenerico";
import InputGenerico from "../../components/Inputs/InputGenerico";
import InputSubmitGenerico from "../../components/Inputs/InputSubmitGenerico";
import PlantillaLog from "../../components/PlantillasFondo/PlantillaLog";

//types
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { empresaSinId } from "../../types/empresa";
//hooks
import { useRouter } from "next/router";
import { useContexto } from "../../hooks/useContexto";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useLog } from "../../hooks/useLog";
//styles
import { logUpPageStyle } from "../../styles/LogUpPageStyles";

const initislNewEmpresa: empresaSinId = {
  nombre: "",
  email: "",
  listUsers: [],
  password: "",
};
//page
const Registrarse: NextPage = () => {
  const { form, handdleChange } = useForm<empresaSinId>(initislNewEmpresa);
  const router = useRouter();
  const { user } = useContexto();
  const { LogUp } = useLog();

  useEffect(() => {
    if (user.auth) router.replace("/");
  }, [user.auth]);
  const handdleSubmitLogUp =(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    LogUp(form.nombre,form.email,form.password,true)
  }
  return (
    <>
      <PlantillaLog src="/img/plantilla-log-up.jpg" alt="plantilla-log-up">
        <main>
          <form onSubmit={handdleSubmitLogUp}>
            <InputGenerico
              value={form.nombre}
              onChange={handdleChange}
              label="nombre"
              typeInput="text"
              placeholder="nombre de la empresa"
              name="nombre"
              require
            ></InputGenerico>
            <InputGenerico
              value={form.email}
              onChange={handdleChange}
              label="correo"
              typeInput="email"
              placeholder="correo electronico"
              name="email"
              require
            ></InputGenerico>
            <InputGenerico
              value={form.password}
              onChange={handdleChange}
              label="contraseña"
              typeInput="password"
              placeholder="contraseña"
              name="password"
              require
            ></InputGenerico>
            <InputGenerico
              label="verifique"
              typeInput="password"
              placeholder="verifique su contreseña"
              name="password-ver"
              require
            ></InputGenerico>
            <InputGenerico
              label="numero"
              typeInput="number"
              placeholder="numero de telefono (obcional)"
              name="phone"
            ></InputGenerico>
            <CheckboxGenerico></CheckboxGenerico>
            <InputSubmitGenerico value="crear" />
            <Link href="/auth/IniciarSecion">
              <a>iniciar secion</a>
            </Link>
          </form>
        </main>
      </PlantillaLog>
      <style jsx>{logUpPageStyle}</style>
    </>
  );
};
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
export default Registrarse;

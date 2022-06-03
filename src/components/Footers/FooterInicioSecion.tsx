import Link from "next/link";
import React from "react";
import { footerInicioSecion } from "../../styles/footers";
const FooterInicioSecion = () => {
  return (
    <>
      <footer>
        <ul>
          <li>
            por que deberias tenernos como base de datos?...{" "}
            <Link href="/nosotros">
              <a>mas</a>
            </Link>
          </li>
          <li>
            no tienes una cuenta?.{" "}
            <Link href="/auth/Registrarse">
              <a>Create Una!</a>
            </Link>
          </li>
        </ul>
      </footer>
      <style jsx>{footerInicioSecion}</style>
    </>
  );
};

export default FooterInicioSecion;

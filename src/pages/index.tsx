import type { GetStaticProps, NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";
import { useContexto } from "../hooks/useContexto";
const Home: NextPage = () => {
  const { user } = useContexto();
  const router = Router;
  useEffect(() => {
    if (!user.auth) {

      router.push("/auth/IniciarSecion");
    }
  }, [user.auth]);

  return (
    <>
      <h1>home page</h1>
    </>
  );
};
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
export default Home;

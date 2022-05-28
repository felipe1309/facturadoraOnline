import { GetStaticProps, NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";
import { useContexto } from "../../hooks/useContexto";
const LogIn: NextPage = () => {
  const router = Router;
  const { user } = useContexto();
  useEffect(() => {
    if (user.auth) {
      router.push("/");
    }
  }, [user.auth]);
  return (
    <>
      <main>
        <h1>LogIn</h1>
      </main>
    </>
  );
};
export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
  };
};
export default LogIn;

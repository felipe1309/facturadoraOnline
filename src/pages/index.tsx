import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContexto } from "../hooks/useContexto";
const Home: NextPage = () => {
  const router = useRouter();
  const { user } = useContexto();
  useEffect(() => {
    if (!user.auth) {
      router.replace("/auth/IniciarSecion");
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

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Registro1 from "../widgets/Inicio/Registro/Registro1";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { userService } from "../services";

const Registro = () => {
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/home");
    }
  }, [router]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Registro</title>
        <meta name="description" content="Aplicación de porsubien" />
        <link rel="icon" href="/Images/Logo2.png" />
      </Head>
      <Registro1 />
    </div>
  );
};

export default Registro;

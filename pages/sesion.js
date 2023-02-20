import Head from "next/head";
import styles from "../styles/Home.module.css";
import IniciarSesion from "../widgets/Inicio/IniciarSesion";

const Sesion = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iniciar Sesión</title>
        <meta name="description" content="Aplicación de porsubien" />
        <link rel="icon" href="/Images/Logo2.png" />
      </Head>
      <IniciarSesion />
    </div>
  );
};

export default Sesion;

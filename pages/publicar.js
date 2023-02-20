import styles from "../styles/publicar.module.css";
import NavSaludoPerfil from "../components/NavSaludoPerfil";
import BarraNavegacionInferior from "../widgets/BarraNavegacionInferior";
import CrearBlogVenta from "../widgets/CrearBlogVenta";
import Head from "next/head";
import { useEffect, useState } from "react";
import { userService } from "../services";

const Publicar = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(userService.userValue.user);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Publicar</title>
        <meta name="description" content="Inicio de porsubien" />
        <link rel="icon" href="/Images/Logo2.png" />
      </Head>
      <nav className={styles.navbar}>
        <NavSaludoPerfil user={user}/>
      </nav>
      <CrearBlogVenta />
      <BarraNavegacionInferior />
    </div>
  );
};

export default Publicar;

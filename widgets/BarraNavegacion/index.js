import styles from "./barraNavegacion.module.css";
import Image from "next/image";
import NavSaludoPerfil from "../../components/NavSaludoPerfil";
import { Howl } from "howler";
import Buscador from "../../components/Buscador";
import Router from "next/router";
import { variablesPersonal } from "../../InformacionPrueba";
import { useEffect, useState } from "react";
import { userService } from "../../services";

const BarraNavegacion = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(userService.userValue.user);
  }, []);
  const onClickFotoPerfil = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.contenedorSaludo}>
        <NavSaludoPerfil user={user} />
      </div>
      <div className={styles.contenedorBuscador}>
        <a
          className={styles.cotenedorLogo}
          onClick={() => Router.push(`/home`)}
        >
          <Image
            className={styles.ImagenPerfil}
            onClick={onClickFotoPerfil}
            alt="Logo de porsubien"
            src="/Images/Logo.png"
            width="100"
            height="100"
            layout="responsive"
            objectFit="contain"
          
          />
        </a>
        <div className={styles.contenedorBarraBuscar}>
          <a onClick={() => Router.push("/buscar")}>
            <Buscador disabled={true} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;

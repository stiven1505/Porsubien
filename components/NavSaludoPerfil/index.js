import styles from "./navSaludoPerfil.module.css";
import Image from "next/image";
import { Howl } from "howler";
import BotonNotificaciones from "../BotonNotificaciones";
import Router from "next/router";
import { variablesPersonal } from "../../InformacionPrueba";

const NavSaludoPerfil = (props) => {
  const onClickFotoPerfil = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };
  return (
    <div className={styles.contenedorInformacion}>
      <div className={styles.contenedorPerfilInfo}>
        <a
          className={styles.contenedorFotoPerfil}
          onClick={() => Router.push(`/perfil/${props.user.slug}`)}
        >
          {props.user !== undefined ? (
            <Image
              className={styles.ImagenPerfil}
              onClick={onClickFotoPerfil}
              alt="Imagen perfil"
              src={props.user.profileImage || "/Images/Defecto/Perfil/perfilDefecto.png"}
              width="100"
              height="100"
              layout="responsive"
              objectFit="cover"
            />
          ) : (
            <Image
              className={styles.ImagenPerfil}
              onClick={onClickFotoPerfil}
              alt="Imagen perfil"
              src="/Images/Defecto/Perfil/perfilDefecto.png"
              width="100"
              height="100"
              layout="responsive"
              objectFit="cover"
            />
          )}
        </a>
        <div className={styles.contenedorTexto}>
          <h4>Hola {props.user.firstName || "Cargando..."}!</h4>
          <h4>Recuerda lavarte las manos!</h4>
        </div>
      </div>
      <div className={styles.contenedorNotificaciones}>
        <BotonNotificaciones />
      </div>
    </div>
  );
};

export default NavSaludoPerfil;

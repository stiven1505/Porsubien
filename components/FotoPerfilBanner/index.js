import styles from "./fotoPerfilBanner.module.css";
import StarIcon from "@mui/icons-material/Star";
import { Howl } from "howler";
import Image from "next/image";
import Verificacion from "../Verificacion";

const FotoPerfilBanner = (props) => {
  const onClickFotoPerfil = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };
  return (
    <div className={styles.container}>
      <div className={styles.fotoPerfil}>
        <Image
          className={styles.ImagenPerfil}
          onClick={onClickFotoPerfil}
          alt="Imagen perfil"
          src={`${props.imagenPerfil}`}
          width="100"
          height="100"
          layout="responsive"
          objectFit="cover"
        />
        <div className={styles.contenedorVerificacion}>
          <Verificacion />
        </div>
        <div className={styles.contenedorCalificacion}>
          <h3 className={styles.TextoCalificacion}>5.0</h3>
          <div className={styles.contenedorEstrella}>
            <StarIcon className={styles.estrella} />
          </div>
        </div>
      </div>
      <div className={styles.contenedorBody}>
        <h1 className={styles.TextoNombre}>{props.nombre}</h1>
        <h1 className={styles.TextoUsuario}>{props.usuario}</h1>
      </div>
    </div>
  );
};

export default FotoPerfilBanner;

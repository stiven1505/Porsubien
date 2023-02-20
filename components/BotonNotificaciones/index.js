import { Badge } from "@mui/material";
import { Howl } from "howler";
import Image from "next/image";
import styles from "./botonNotificaciones.module.css";
import Link from "next/link";

const BotonNotificaciones = () => {
    const onClickNotificacion = () => {
      const sound = new Howl({
        src: "/sounds/Sonido.mp3",
        volume: 0.2,
        html5: true,
      });
      sound.play();
    };
  return (
    <div className={styles.contenedorTotalNotificacion}>
    {/* <Link href={`/notificaciones`} passHref>
      <Badge badgeContent={4} color="warning">
        <div className={styles.contenedorNotificaciones}>
          <Image
            className={styles.ImagenPerfil}
            onClick={onClickNotificacion}
            alt="Notificaciones"
            src="/Images/Botones/notificacion.png"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </Badge></Link> */}
    </div>
  );
};

export default BotonNotificaciones;

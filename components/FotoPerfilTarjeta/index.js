import Image from "next/image";
import Verificacion from "../Verificacion";
import styles from "./fotoPerfilVenta.module.css";
import StarIcon from '@mui/icons-material/Star';
import { Howl } from "howler";
import { useState } from "react";
import { useRouter } from "next/router";

const FotoPerfilVenta = (props) => {
  const router = useRouter();

  const onClickFotoPerfil = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
    router.push(`/perfil/${props.user.slug}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.fotoPerfil}>
      {props.user !== undefined ? (
            <Image
              className={styles.ImagenPerfil}
              onClick={onClickFotoPerfil}
              alt="Imagen perfil"
              src={
                props.user.profileImage ||
                "/Images/Defecto/Perfil/perfilDefecto.png"
              }
              width="100"
              height="100"
              layout="responsive"
              objectFit="cover"
              priority
            />
          ) : (
            <Image
              className={styles.ImagenPerfil}
              alt="Imagen perfil"
              src="/Images/Defecto/Perfil/perfilDefecto.png"
              width="100"
              height="100"
              layout="responsive"
              objectFit="cover"
            />
          )}
        <div className={styles.contenedorVerificacion}>
          {/* Verificación desactivada ya que no hay tiempo para esta entraga implementarlo */}
          {/* {props.user.verification.status ? (
          <Verificacion verificado={user.verification.status} />) : (<></>)} */}
        </div>
        {/* Se quita por el momento para no afectar la entrega a tiempo */}
        {/* <div className={styles.contenedorCalificacion}>
          <h5>5.0</h5>
          <div className={styles.contenedorEstrella}>
            <StarIcon className={styles.estrella}/>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FotoPerfilVenta;

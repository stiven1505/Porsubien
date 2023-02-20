import Image from "next/image";
import styles from "./cabeceraPerfil.module.css";
import BotonPrincipal from "../../components/BotonPrincipal";
import BotonSecundario from "../../components/BotonSecundario";
import { useEffect, useState } from "react";
import { followService } from "../../services/follows.service";

const CabeceraPerfil = (props) => {
  const [siguiendo, setSiguiendo] = useState(false);
  useEffect(() => {
    followService.followed(props.user._id).then((res) => {
      setSiguiendo(res.follow);
    });
  }, [props.user._id]);
  const onClickSeguir = () => {
    setSiguiendo(!siguiendo);
    if (siguiendo == false) {
      followService.postfollow({ _userFollow: props.user._id }).then((res) => {
        console.log(res);
        return setSiguiendo(true);
      });
    }
    if (siguiendo == true) {
      followService.unfollow(props.user._id).then((res) => {
        console.log(res);
        return setSiguiendo(false);
      });
    }
  };
  return (
    <div className={styles.containerPortada}>
      <div className={styles.contenedorImagen}>
        {props.user ? (
          <Image
            className={styles.ImagenPortada}
            alt="Imagen perfil"
            src={props.user.headerImage || "/Images/Defecto/Perfil/portada.png"}
            width="100"
            height="45"
            layout="responsive"
            objectFit="cover"
            priority
          />
        ) : (
          <Image
            className={styles.ImagenPortada}
            alt="Imagen perfil"
            src="/Images/Defecto/Perfil/portada.png"
            width="100"
            height="45"
            layout="responsive"
            objectFit="cover"
            priority
          />
        )}
        <div className={styles.containerInteraccion}>
          <div className={styles.fotoPerfil}>
            {props.user ? (
              <Image
                className={styles.ImagenPerfil}
                alt="Imagen perfil"
                src={
                  props.user.profileImage ||
                  "/Images/Defecto/perfil/PerfilDefecto.png"
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
          </div>
          <a onClick={onClickSeguir} className={styles.containerBoton}>
            {siguiendo ? (
              <BotonSecundario titular="Siguiendo" />
            ) : (
              <BotonPrincipal titular="Seguir" />
            )}
          </a>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CabeceraPerfil;

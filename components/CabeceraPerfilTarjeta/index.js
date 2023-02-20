import Image from "next/image";
import BotonSecundario from "../../components/BotonSecundario";
import BotonPrincipal from "../../components/BotonPrincipal";
import FotoPerfilTarjeta from "../../components/FotoPerfilTarjeta";
import { useEffect, useState } from "react";
import styles from "./cabeceraPerfilTarjeta.module.css";
import { followService } from "../../services/follows.service";

const CabeceraPerfilTarjeta = ({ informacion }) => {
  const [siguiendo, setSiguiendo] = useState(false);
  useEffect(() => {
    followService.followed(informacion._id).then((res) => {
      setSiguiendo(res.follow);
    });
  }, [informacion._id]);
  const onClickSeguir = () => {
    setSiguiendo(!siguiendo);
    if (siguiendo == false) {
      followService.postfollow({ _userFollow: informacion._id }).then((res) => {
        console.log(res);
        return setSiguiendo(true);
      });
    }
    if (siguiendo == true) {
      followService.unfollow(informacion._id).then((res) => {
        console.log(res);
        return setSiguiendo(false);
      });
    }
  };
  return (
    <div>
      <div className={styles.containerPortada}>
        {informacion ? (
          <Image
            className={styles.ImagenPortada}
            alt="Imagen perfil"
            src={
              informacion.headerImage || "/Images/Defecto/Perfil/portada.png"
            }
            width="100"
            height="40"
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
            height="40"
            layout="responsive"
            objectFit="cover"
            priority
          />
        )}

        <div className={styles.containerInteraccion}>
          <FotoPerfilTarjeta user={informacion} />
          <a onClick={onClickSeguir} className={styles.containerBoton}>
            {siguiendo ? (
              <BotonSecundario titular="Siguiendo" />
            ) : (
              <BotonPrincipal titular="Seguir" />
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CabeceraPerfilTarjeta;

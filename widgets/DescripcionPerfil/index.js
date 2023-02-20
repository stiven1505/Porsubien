import styles from "./descripcionPerfil.module.css";
import CalificacionEstrella from "../../components/CalificacionEstrella";
import Verificacion from "../../components/Verificacion";
import Ubicacion from "../../components/Ubicacion";
import CreadoFecha from "../../components/CreadoFecha";
import BotonWhatsapp from "../../components/BotonWhatsapp";
import { followService } from "../../services/follows.service";
import { useEffect, useState } from "react";

const DescripcionPerfil = (props) => {
  const [follows, setFollows] = useState(0);
  const [followers, setFollowers] = useState(0);
  useEffect(() => {
    if (props.user._id !== undefined) {
      followService.getFollows(props.user._id).then((res) => {
        setFollows(res.length);
      });
      followService.getFollowers(props.user._id).then((res) => {
        setFollowers(res);
      });
    }
  }, [props.user._id]);
  return (
    <div className={styles.containerDescripcionPerfil}>
      <div className={styles.contenedorInformacionDescripcion}>
        <div className={styles.containerNombreUsuario}>
          <div className={styles.containerTextoNombre}>
            <h1 className={styles.TextoNombre}>
              {props.user.firstName} {props.user.lastName}{" "}
            </h1>
            <h4>{props.user.slug}</h4>
          </div>
          <div className={styles.contenedorVerificacion}>
            {/* Se quita verificación que no hace parte de esta entrega */}
            {/* <Verificacion /> */}
          </div>
        </div>
        <div className={styles.containerCalificacion}>
          {/* Se quita calificación para la siguiente entrega */}
          {/* <CalificacionEstrella /> */}
        </div>
        <p>{props.user.bio || ""}</p>
        <div className={styles.containerUbicacion}>
          <Ubicacion ubication={props.user.ubication || "Cali"} />
        </div>
        <div className={styles.containerCreadoFecha}>
          <CreadoFecha fecha={props.user.createdAt || "Cali"} />
        </div>
        <div className={styles.containerSeguidosSiguiendo}>
          <div className={styles.containerSeguimiento}>
            <p>Seguidos</p>
            <h4 className={styles.numeroSeguimiento}>{follows}</h4>
          </div>
          <div className={styles.containerSeguimiento}>
            <p>Siguiendo</p>
            <h4 className={styles.numeroSeguimiento}>{followers}</h4>
          </div>
        </div>
        <div className={styles.containerBotonWpp}>
          <BotonWhatsapp texto={true} numero={props.user.phone || ""}/>
        </div>
      </div>
    </div>
  );
};

export default DescripcionPerfil;

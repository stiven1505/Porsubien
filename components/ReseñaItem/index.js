import styles from "./reseñaItem.module.css";
import BotonComentar from "../BotonComentar";
import BotonLike from "../BotonLike";
import FotoPerfilVenta from "../FotoPerfilTarjeta";
import CalificacionEstrella from "../CalificacionEstrella";
import Reportar from "../Reportar";
import Eliminar from "../Eliminar";
import { useEffect, useState } from "react";
import { userService } from "../../services";

const ReseñaItem = (props) => {
  const [state, setState] = useState(props.propietario);
  const [user, setUser] = useState({});
  useEffect(() => {
    userService.getUserById(props.review._user).then((res) => {
      setUser(res);
    });
  }, [props.review._user]);

  return (
    <div className={styles.contenedorReseña}>
      <div className={styles.contenedorParteSuperior}>
        <div className={styles.contenedorImagenPerfil}>
          <FotoPerfilVenta user={user} />
        </div>
        <div className={styles.contenedorNombreCalificacion}>
          <h3 style={{ padding: "5px" }}>
            {user.firstName || "Nombre"} {user.lastName || "Apellido"}{" "}
          </h3>
          <CalificacionEstrella stars={props.review.review.$numberDecimal} />
        </div>
        <div className={styles.contenedorBotones}>
          {/* {state ? <Eliminar setState={setState}/> : <Reportar />} */}
        </div>
      </div>
      <div className={styles.contenedorCuerpoTexto}>
        <p>{props.review.comment}</p>
      </div>
      <div className={styles.contenedorInteracion}>
        <BotonLike item={props.review._id} />
      </div>
    </div>
  );
};

export default ReseñaItem;

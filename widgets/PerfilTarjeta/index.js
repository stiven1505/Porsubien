import CartelDestacado from "../../components/CartelDestacado";
import CalificacionEstrella from "../../components/CalificacionEstrella";
import styles from "./perfilTarjeta.module.css";
import CabeceraPerfilTarjeta from "../../components/CabeceraPerfilTarjeta";

const PerfilTarjeta = ({ informacion }) => {
  return (
    <div className={styles.containerPerfilTarjeta}>
      <div className={styles.containerPerfilCabecera}>
        <CabeceraPerfilTarjeta informacion={informacion} />
      </div>
      <div className={styles.containerInformacion}>
        <div className={styles.containerInformacionIzquierda}>
          <div className={styles.containerNombrePerfil}>
            <h3>
              {informacion.firstName} {informacion.lastName}
            </h3>
          </div>
          <div>
            <h4>{informacion.slug}</h4>
          </div>
        </div>
        <div className={styles.containerInformacionderecha}>
          <p className={styles.containerDescripcionPerfil}>{informacion.bio}</p>
        </div>
      </div>
      <div className={styles.containerDestaco}>{/* <CartelDestacado /> */}</div>
    </div>
  );
};

export default PerfilTarjeta;

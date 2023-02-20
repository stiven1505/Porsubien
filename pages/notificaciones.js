import BarraNavegacionInicio2 from "../widgets/BarraNavegacionInicio2";
import styles from "../styles/notificaciones.module.css";

const notificaciones = () => {
  return (
    <div className={styles.container}>
      <BarraNavegacionInicio2 />
      <div className={styles.contenedorBody}>
        <h1>Notificaciones</h1>
      </div>
    </div>
  );
};

export default notificaciones;

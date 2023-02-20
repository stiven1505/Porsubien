import Promocionar from "../../widgets/Promocionar";
import styles from "../../styles/promocionar.module.css";
import BotonAtras from "../../components/BotonAtras";
import Router from "next/router";
import BarraNavegacionInferior from "../../widgets/BarraNavegacionInferior";

const promocionar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.contenedorhead}>
          <h1 className={styles.titulo}>Opciones</h1>
        </div>
        <div className={styles.contenedorhead}>
          <a onClick={() => Router.back()}>
            <BotonAtras></BotonAtras>
          </a>
        </div>
      </div>

      <Promocionar />
      <BarraNavegacionInferior />
    </div>
  );
};

export default promocionar;

import styles from "../../../../styles/promocionar.module.css";
import BotonAtras from "../../../../components/BotonAtras";
import PromocionChart from "../../../../widgets/PromocionChart";
import Router from "next/router";
import BarraNavegacionInferior from "../../../../widgets/BarraNavegacionInferior";

const DatosResumen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.contenedorhead}>
          <h1 className={styles.titulo}>Promoción perfil</h1>
          <h2 className={styles.titulo}>
            Puedes ver las metricas de tu promoción y datos relevantes
          </h2>
        </div>
        <div className={styles.contenedorhead}>
          <a onClick={() => Router.back()}>
            <BotonAtras></BotonAtras>
          </a>
        </div>
      </div>
      <div className={styles.contenedorprincipal}>
        <h1 className={styles.activo}>Activo</h1>
        <h2 className={styles.titulo}>Plan estandar</h2>
        <h2 className={styles.titulo}>Interacciones de tu promoción por día</h2>
      </div>
      <PromocionChart />

      <BarraNavegacionInferior />
    </div>
  );
};

export default DatosResumen;

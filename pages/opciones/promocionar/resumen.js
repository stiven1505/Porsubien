import BotonAtras from "../../../components/BotonAtras";
import styles from "../../../styles/promocionar.module.css";
import Router from "next/router";
import { variablesPromocionesResumen } from "../../../InformacionPrueba";
import Link from "next/link";
import BarraNavegacionInferior from "../../../widgets/BarraNavegacionInferior";

const resumen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.contenedorhead}>
          <h1 className={styles.titulo}>Resumen promociones</h1>
          <h2 className={styles.titulo}>
            Mira como te ha ido con tus promociones
          </h2>
        </div>
        <div className={styles.contenedorhead}>
          <a onClick={() => Router.back()}>
            <BotonAtras></BotonAtras>
          </a>
        </div>
      </div>
      <div className={styles.body}>
        {variablesPromocionesResumen.map((step, index) => (
          <Link legacyBehavior
            href={`/opciones/promocionar/resumen/${step.id}`}
            key={step.id}
            passHref
          >
            <button key={step.id} className={styles.contenedorBoton}>
              {step.Nombre}
            </button>
          </Link>
        ))}
      </div>
      <BarraNavegacionInferior />
    </div>
  );
};

export default resumen;

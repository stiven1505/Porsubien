import BotonAtras from "../../components/BotonAtras";
import styles from "./barraNavegacionInicio2.module.css";
import Image from "next/image";
import Router from "next/router";

const BarraNavegacionInicio2 = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.contenedorAtras}>
        <a onClick={() => Router.back()}>
          <BotonAtras />
        </a>
      </div>
      <div className={styles.contenedorNotificaciones}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/Logo2.png`}
          width="50"
          height="50"
          layout="fixed"
          priority
        />
      </div>
    </div>
  );
};

export default BarraNavegacionInicio2;

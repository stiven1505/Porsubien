import styles from "./barraNavegacionInicio.module.css";
import Image from "next/image";

const BarraNavegacionInicio = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contenedorNotificaciones}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/Logo.png`}
          width="40"
          height="50"
          layout="fixed"
          priority
        />
      </div>
    </nav>
  );
};

export default BarraNavegacionInicio;

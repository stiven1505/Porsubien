import styles from "./paso3.module.css";
import Image from "next/image";

const Paso3 = () => {
  return (
    <div className={styles.contenedor}>
    <h1 className={styles.textoprincipal}>Como mostraremos tu promoción</h1>
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/promocion/paso3.png`}
          width="50"
          height="80"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
};

export default Paso3;

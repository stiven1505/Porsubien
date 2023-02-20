import Image from "next/image";
import Link from "next/link";
import styles from "./promocionar.module.css";

const Promocionar = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorBlog}>
        <div className={styles.contenedorImagen}>
          <Image
            alt={`Imagen Inicio`}
            className={styles.Imagen}
            src={`/Images/opciones/Promocionar.png`}
            width="50"
            height="35"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>
        <Link legacyBehavior href={`/opciones/promocionar/pasos`} passHref>
          <button className={styles.BotonPromocionar}>PROMOCIONAR</button>
        </Link>
      </div>
      <div className={styles.contenedorVenta}>
        <div className={styles.contenedorImagen}>
          <Image
            alt={`Imagen Inicio`}
            className={styles.Imagen}
            src={`/Images/opciones/Resumen.png`}
            width="50"
            height="35"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>
        <Link href={`/opciones/promocionar/resumen`} passHref>
          <button className={styles.BotonResumen}>RESUMEN</button>
        </Link>
      </div>
    </div>
  );
};

export default Promocionar;

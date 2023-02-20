import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/404.module.css";
import BarraNavegacionInicio from "../widgets/BarraNavegacionInicio";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className={styles.contenedor}>
      <BarraNavegacionInicio />
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/404.png`}
          width="50"
          height="50"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <h1 className={styles.texto}>Error 404</h1>
      <h2 className={styles.texto}>Upsss Esta página no se encontró</h2>
      <button onClick={() => router.back()} className={styles.boton}>
        Volver
      </button>
    </div>
  );
};

export default NotFound;

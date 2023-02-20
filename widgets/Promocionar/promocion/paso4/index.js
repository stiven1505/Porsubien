import styles from "../paso1/paso1.module.css";
import Image from "next/image";

const Paso4 = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorImagen2}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/promocion/paso4.png`}
          width="90"
          height="50"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <form className={styles.contenedorForm}>
        <h1 className={styles.Titulo}>Plan Premium</h1>
        <h2 className={styles.Subtexto}>
          El plan premium te hará aparecer en la pantalla principal en el
          carrusel, mostraremos tu perfil y 2 productos recientes
        </h2>
      </form>
    </div>
  );
};

export default Paso4;

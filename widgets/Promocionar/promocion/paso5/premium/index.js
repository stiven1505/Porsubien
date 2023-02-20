import styles from "../paso5.module.css";
import Image from "next/image";

const Premium = () => {
  return (
    <div className={styles.contenedoropcion}>
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/promocion/premium.png`}
          width="50"
          height="50"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <form className={styles.contenedorForm}>
        <h1 className={styles.Titulo}>Plan premium</h1>
        <h2 className={styles.Subtexto}>
          Publica tu venta, blog o perfil en el inicio de porsubien, en la
          sección del carrusel por 2 días, este plan tiene un costo de
          $100.000COP. Recuerda que este anuncio va dirigido a usuarios que les
          interesa la categoría de tu publicación
        </h2>
      </form>
    </div>
  );
};

export default Premium;

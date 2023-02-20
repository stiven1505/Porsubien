import styles from "../paso5.module.css";
import Image from "next/image";

const Estandar = () => {
  return (
    <div className={styles.contenedoropcion}>
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/promocion/estandar.png`}
          width="50"
          height="50"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <form className={styles.contenedorForm}>
        <h1 className={styles.Titulo}>Plan estándar</h1>
        <h2 className={styles.Subtexto}>
          Publica tu venta, blog o perfil en el inicio de porsubien, en la
          sección de destacados por 2 días, este plan tiene un costo de
          $50.000COP. Recuerda que este anuncio va dirigido a usuarios que les
          interesa la categoría de tu publicación
        </h2>
      </form>
    </div>
  );
};

export default Estandar;

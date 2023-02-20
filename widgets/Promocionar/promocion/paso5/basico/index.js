import styles from "../paso5.module.css";
import Image from "next/image";

const Basico = () => {
  return (
    <div className={styles.contenedoropcion}>
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/promocion/basico.png`}
          width="50"
          height="50"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <form className={styles.contenedorForm}>
        <h1 className={styles.Titulo}>Plan básico</h1>
        <h2 className={styles.Subtexto}>
          Publica tu venta, blog o perfil en el inicio de porsubien, en la
          sección de destacados por 1 día, este plan tiene un costo de
          $30.000COP. Recuerda que este anuncio va dirigido a usuarios que les
          interesa la categoría de tu publicación
        </h2>
      </form>
    </div>
  );
};

export default Basico;

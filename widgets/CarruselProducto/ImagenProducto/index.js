import Image from "next/image";
import styles from "./imagenProducto.module.css";

const ImagenProducto = (props) => {
  return (
    <div className={styles.contenedorPerfilCarrusel}>
      <div className={styles.ContenedorImagenPortada}>
          <Image
            alt={`Imagen Carrusel producto`}
            className={styles.ImagenPortada}
            src={`${props.foto}`}
            width="100%"
            height="80%"
            layout="responsive"
            objectFit="cover"
            priority
          />
      </div>
    </div>
  );
};

export default ImagenProducto;

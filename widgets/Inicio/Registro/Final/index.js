import styles from "./final.module.css";
import Image from "next/image";

const Final = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorImagen}>
        <Image
          alt="Imagen perfil"
          src={`/Images/Inicio/registrofinal.png`}
          width="100"
          height="100"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <h1 className={styles.textoprincipal}>
        Gracias por confiar en porsubien
      </h1>
      <p className={styles.textoprincipal}>
        En poco tiempo verificaremos tu información si optaste por la
        verificación del perfil.
        <br />
        Disfruta de todo lo que brinda porsubien!
      </p>
    </div>
  );
};

export default Final;

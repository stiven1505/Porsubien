import styles from "./paso1.module.css";
import Image from "next/image";

const Paso1 = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/promocion/paso1.png`}
          width="50"
          height="50"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <form className={styles.contenedorForm}>
        <h1 className={styles.Titulo}>
          Promociona tu producto, tu blog o tu perfil
        </h1>
        <h2 className={styles.Subtexto}>
          Porsubien se encargara de promocionar lo que desees tu solo espera los
          resultados
        </h2>
      </form>
    </div>
  );
};

export default Paso1;

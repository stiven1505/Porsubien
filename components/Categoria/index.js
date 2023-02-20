import { Howl } from "howler";
import Image from "next/image";
import styles from "./categoria.module.css";

const Categoria = (props) => {
  const onClick = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };
  return (
   <div className={styles.containerImagenTexto}>
      <a className={styles.containerCategoria} onClick={onClick}> 
      <Image
        className={styles.ImagenPerfil}
        alt="Imagen categoría"
        src={`/${props.Imagen}`}
        width="100"
        height="100"
        layout="responsive"
        objectFit="contain"
      />
    </a>
    <h4 className={styles.TextoCatg}>{props.Nombre}</h4>
   </div>
  );
};

export default Categoria;

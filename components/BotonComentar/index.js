import { Howl } from "howler";
import Image from "next/image";
import styles from "./botonComentar.module.css";

const BotonComentar = () => {
  const onClick = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };
  return (
    <a className={styles.contenedor} onClick={onClick}>
      <div className={styles.contenedorBotonMeGusta}>
        <Image
          className={styles.imagenMeGusta}
          alt="Imagen me gusta"
          src="/Images/Botones/comentar.png"
          width="25"
          height="25"
          layout="intrinsic"
          objectFit="contain"
        />
      </div>
    </a>
  );
};

export default BotonComentar;

import Image from "next/image";
import styles from "./botonAtras.module.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Howl } from "howler";

const BotonAtras = () => {
  const onClick = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };
  return (
    <div onClick={onClick} className={styles.contenedorAtras}>
        <ArrowBackIcon style={{color:"#FFBBAD"}} />
    </div>
  );
};

export default BotonAtras;

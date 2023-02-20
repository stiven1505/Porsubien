import { Howl } from "howler";
import styles from "./botonPrincipal.module.css"

const BotonPrincipal = (props) => {
    const onClick = () => {
      const sound = new Howl({
        src: "/sounds/Sonido.mp3",
        volume: 0.2,
        html5: true,
      });
      sound.play();
    };
    return (
        <button className={styles.containerBoton} onClick={onClick}>
            <h2 className={styles.containerTextoBoton}>{props.titular}</h2>
        </button>
    );
}

export default BotonPrincipal;
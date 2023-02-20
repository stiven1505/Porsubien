import Image from "next/image";
import styles from "./ventaTarjetaCarrusel.module.css";

const VentaTarjetaCarrusel = (props) => {
  const onClickVenta = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };
  return (
    <div className={styles.ContenedorVenta}>
        <div className={styles.contenedorprincipalarriba}>
          <div className={styles.ContenedorImagenVenta}>
            <Image
              className={styles.ImagenVenta}
              alt="Imagen perfil"
              src={`${props.Imagen}`}
              width="100"
              height="50"
              layout="responsive"
              objectFit="cover"
              priority
            />
          </div>
        </div>
        <div className={styles.ContenedorInformacionVenta}>
          <div className={styles.ContenedorInformacion}>
            <h4 className={styles.TarjetaBlogTitulo}>{props.producto}</h4>
          </div>
          <div className={styles.ContenedorPrecio}>
            <h2 className={styles.textoPrecio}>{props.precio}</h2>
          </div>
        </div>
    </div>
  );
};

export default VentaTarjetaCarrusel;

import styles from "./botonWhatsapp.module.css";
import Image from "next/image";

const BotonWhatsapp = (props) => {
  return (
    <a className={styles.contenedorBotonWpp} href={`https://wa.me/+57${props.numero}` || "https://wa.me/+57"} >
      {props.texto ? (
        <div className={styles.contenedorBotonConTexto}>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenWpp}
              alt="Imagen me gusta"
              src="/Images/Botones/Whatsapp.png"
              width="25"
              height="25"
              layout="intrinsic"
              objectFit="contain"
            />
          </div>
          <p className={styles.textoBotonWpp}>Comunicate vía Whatsapp</p>
        </div>
      ) : (
        <div className={styles.contenedorImagen}>
          <Image
            className={styles.imagenWpp}
            alt="Imagen me gusta"
            src="/Images/Botones/Whatsapp.png"
            width="25"
            height="25"
            layout="intrinsic"
            objectFit="contain"
          />
        </div>
      )}
    </a>
  );
};

export default BotonWhatsapp;

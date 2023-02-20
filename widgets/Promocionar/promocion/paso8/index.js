import styles from "../paso2/paso2.module.css";
import Image from "next/image";

const Paso8 = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.textoprincipal}>Pago</h1>
      <div className={styles.contenedorInformacion}>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/promocion/paso8.1.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              porsubien en estos momentos está iniciando y por esta razón el
              pago se hace por consignación a una cuenta bancaria
            </p>
          </div>
        </div>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Comunícate con nosotros por medio de WhatsApp para concretar el
              pago de la promoción.
            </p>
          </div>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/promocion/paso8.2.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/promocion/paso8.3.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Envíanos el comprobante y te diremos los días que te activaremos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paso8;

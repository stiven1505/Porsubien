import styles from "./paso2.module.css";
import Image from "next/image";

const Paso2 = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.textoprincipal}>Beneficios</h1>
      <div className={styles.contenedorInformacion}>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/promocion/paso2.1.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Promocionar te ayudara a crecer en la plataforma, lo que significa
              que llegaras a más personas en porsubien.
            </p>
          </div>
        </div>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              La promoción ayuda a que más personas vean tus ventas y conozcas
              tu perfil en porsubien
            </p>
          </div>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/promocion/paso2.2.png`}
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
              src={`/Images/promocion/paso2.3.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Sabemos lo que cuesta el dinero y por esta razón porsubien
              realizara una buena promoción para ti!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paso2;

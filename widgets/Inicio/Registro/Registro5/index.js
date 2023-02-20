import styles from "./registro5.module.css";
import Image from "next/image";

const Registro5 = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.textoprincipal}>Verificar perfil</h1>
      <p className={styles.textoprincipal}>
        No es obligatorio, puedes continuar
      </p>
      <div className={styles.contenedorInformacion}>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/Inicio/registro4.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              ¿Por qué? La verificación ayuda a que otras personas te
              identifiquen fácilmente y generes confianza como vendedor o
              cliente.
            </p>
          </div>
        </div>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              La verificación del perfil se basa en comparar tus datos y ver que
              eres la persona que dices ser.
            </p>
          </div>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/Inicio/registro5.png`}
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
              src={`/Images/Inicio/registro6.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Porsubien guardará tu información con cuidado y nunca la
              compartirá con un tercero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro5;

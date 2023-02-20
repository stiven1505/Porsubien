import styles from "./inicio.module.css";
import Image from "next/image";
import BarraNavegacionInicio from "../BarraNavegacionInicio";
import Link from "next/link";

const Inicio = () => {
  return (
    <div className={styles.contenedor}>
      <BarraNavegacionInicio />
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/Inicio/inicio.png`}
          width="50"
          height="50"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <form className={styles.contenedorForm}>
        <h1 className={styles.Titulo}>Bienvenido a porsubien!</h1>
        <h2 className={styles.Subtexto}>
          Nos alegra que estes aquí y hagas crecer nuestra comunidad Porsubien
          es un eccomerce que quiere permanecer en tu día a día y mantenerte
          informado.
        </h2>
        <div className={styles.contenedorBotones}>
          <Link legacyBehavior href={`/sesion`} key={"sesion"} passHref>
            <button className={styles.Iniciar}>Iniciar sesión</button>
          </Link>

          <Link legacyBehavior href={`/registro`} key={"registro"} passHref>
            <button className={styles.Registro}>Regístrate</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Inicio;

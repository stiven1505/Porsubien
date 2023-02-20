import Image from "next/image";
import styles from "./verificacion.module.css";

const Verificacion = (props) => {
  return (
    <div className={styles.container}>
      {props.verificado ? (
        <Image
          alt="Imagen perfil"
          src="/Images/Defecto/perfil/verificacion.png"
          width="100"
          height="100"
          objectFit="contain"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Verificacion;

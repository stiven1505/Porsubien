import BotonAtras from "../../components/BotonAtras";
import BotonNotificaciones from "../../components/BotonNotificaciones";
import styles from "./barraNavegacionPerfil.module.css";
import { useRouter } from "next/router";

const BarraNavegacionPerfil = () => {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
      <div className={styles.contenedorAtras}>
        <a onClick={() => router.back()}>
          <BotonAtras />
        </a>
      </div>
      <div className={styles.contenedorNotificaciones}>
        <BotonNotificaciones />
      </div>
    </div>
  );
};

export default BarraNavegacionPerfil;

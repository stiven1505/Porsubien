import styles from "../../styles/promocionar.module.css";
import Registro6 from "../../widgets/Inicio/Registro/Registro6";
import BotonAtras from "../../components/BotonAtras";
import Router from "next/router";

const verificar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.contenedorhead}>
          <h1 className={styles.titulo}>Verificar</h1>
          <h2 className={styles.titulo}>
            ¡La verificación puede tardar, pero es importante para que todos
            confíen en ti!
          </h2>
        </div>
        <div className={styles.contenedorhead}>
          <a onClick={() => Router.back()}>
            <BotonAtras></BotonAtras>
          </a>
        </div>
      </div>
      <Registro6 />
      <button className={styles.enviar}>Enviar</button>
    </div>
  );
};

export default verificar;

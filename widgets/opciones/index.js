import styles from "./opciones.module.css";
import Image from "next/image";
import Ayuda from "../../components/Ayuda";
import CerrarSesion from "../../components/CerrarSesion";
import Link from "next/link";
import Router from "next/router";
import {variablesPersonal} from "../../InformacionPrueba";
import { userService } from "../../services";
import Acerca from "../../components/Acerca";
import Verificacion from "../../components/Verificacion";

const Opciones = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.botones}>
        <div className={styles.botonesPrincipales}>
          <button className={styles.boton1} onClick={() => Router.push(`/perfil/${userService.userValue.user.slug || ""}`)}>
            <h2 className={styles.texto}>Mi perfil</h2>
          </button>
          {/* <Link href={`/opciones/promocionar`} passHref> */}
            <button className={styles.boton2} disabled >
              <h2 className={styles.texto} >Promocionar (pronto)</h2>
            </button>
          {/* </Link> */}
          {/* <Link href={`/opciones/verificar`} passHref> */}
            <button className={styles.boton1} disabled>
              <h2 className={styles.texto}>Verificarme (pronto)</h2>
            </button>
          {/* </Link> */}
          
          <Verificacion/>
          <Ayuda />

          <Acerca/>


          
        </div>
        <div className={styles.botonCerrarSesion}>
          <CerrarSesion />
        </div>
      </div>
      <div className={styles.imagen}>
        <div className={styles.contenedorImagen}>
          <Image
            alt="Imagen perfil"
            src={`/Images/opciones/opciones.png`}
            width="40"
            height="100"
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Opciones;

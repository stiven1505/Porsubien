import Image from "next/image";
import Verificacion from "../../../components/Verificacion";
import BotonWhatsapp from "../../../components/BotonWhatsappUsuario";
import Reportar from "../../../components/Reportar";
import styles from "../cuerpoProducto.module.css";
import Ubicacion from "../../../components/Ubicacion";
import CreadoFecha from "../../../components/CreadoFecha";
import NumeroTelefono from "../../../components/numeroTelefono";
import BotonCompartir from "../../../components/BotonCompartir";
import EditarPublicacion from "../../../components/EditarPublicacion";
import Estadisticas from "../../../components/Estadisticas";
import { useEffect, useState } from "react";

const Personal = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (props.producto._user !== undefined) {
      userService.getUserById(props.producto._user).then((res) => {
        setUser(res);
      });
    }
  }, [props.producto._user]);
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorInformacion}>
        <div className={styles.contenedorTitulo}>
          <h1 className={styles.Titulo}>{props.producto.title || "Título"}</h1>
          <h1 className={styles.Precio}>
            $
            {props.producto.price !== undefined
              ? props.producto.price.$numberDecimal
              : "0"}
          </h1>
        </div>
        <div>
          <h3 className={styles.disponibilidad}>Disponible</h3>
        </div>
        <div className={styles.contenedorCuentaPerfilInteraccion}>
          <div className={styles.contenedorTextoCuenta}>
            <div className={styles.fotoPerfil}>
            <Image
                className={styles.ImagenPerfil}
                alt="Imagen perfil"
                src={
                  user.profileImage ||
                  "/Images/Defecto/Perfil/perfilDefecto.png"
                }
                width="100"
                height="100"
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className={styles.containerTextoNombre}>
              <h3 className={styles.TextoNombre}>{user.firstName}{" "}{user.lastName}</h3>
              <h5 className={styles.TextoUsuario}>{user.userName}</h5>
            </div>
            <div className={styles.contenedorVerificacion}>
              <Verificacion />
            </div>
          </div>
          <div className={styles.contenedorInteraccion}>
            <div className={styles.botonWpp}>
            <BotonWhatsapp texto={false} numero={props.producto.phone || user.phone} />
            </div>
            <div className={styles.botonWpp}>
              <BotonCompartir />
            </div>
            <div className={styles.Reportar}>
              <Reportar />
            </div>
          </div>
        </div>
        <div className={styles.contenedorCuerpoTexto}>
          <div className={styles.containerUbicacion}>
            <Ubicacion />
          </div>
          <div className={styles.containerCreadoFecha}>
            <CreadoFecha />
          </div>
          <p className={styles.containerDescripcion}>
            Lorem ipsum dolor sit amet consectetur adipiscingad
            ipiscingadipiscing elit lobortis, risus sagittis vulputate dui eu
            nec. Camilita Pepita Lorem ipsum dolor sit amet consectetur
            adipiscingad ipiscingadipiscing elit lobortis, risus sagittis
            vulputate dui eu nec. Lorem ipsum dolor sit amet consectetur
            adipiscingad ipiscingadipiscing elit lobortis, risus sagittis
            vulputate dui eu nec. Lorem ipsum dolor sit amet consectetur
            adipiscingad ipiscingadipiscing elit lobortis, risus sagittis
            vulputate dui eu nec. Lorem ipsum dolor sit amet consectetur
            adipiscingad ipiscingadipiscing elit lobortis, risus sagittis
            vulputate dui eu nec. Camilita Pepita Lorem ipsum dolor sit amet
            consectetur adipiscingad ipiscingadipiscing elit lobortis, risus
            sagittis vulputate dui eu nec. Lorem ipsum dolor sit amet
            consectetur adipiscingad ipiscingadipiscing elit lobortis, risus
            sagittis vulputate dui eu nec. Lorem ipsum dolor sit amet
            consectetur adipiscingad ipiscingadipiscing elit lobortis, risus
            sagittis vulputate dui eu nec.
          </p>
          <div className={styles.contenedorNumeroTelefono}>
            <NumeroTelefono />
            <EditarPublicacion />
            <Estadisticas />
          </div>
        </div>
        <div className={styles.contenedorReportar}></div>
      </div>
    </div>
  );
};

export default Personal;

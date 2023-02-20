import { Howl } from "howler";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BotonLike from "../../components/BotonLike";
import CartelDestacado from "../../components/CartelDestacado";
import FotoPerfilTarjeta from "../../components/FotoPerfilTarjeta";
import { userService } from "../../services";
import styles from "./ventaTarjeta.module.css";
import accounting from "accounting";

const VentaTarjeta = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    userService.getUserById(props.informacion._user).then((res) => {
      setUser(res);
    });
  }, [props.informacion._user]);
  const onClick = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };
  return (
    <div className={styles.ContenedorVenta}>
      <Link legacyBehavior
        href={props.informacion ? `/producto/${props.informacion.slug}` : "/"}
        passHref
        onClick={onClick}
      >
        <div style={{ cursor: "pointer" }}>
          <div className={styles.contenedorprincipalarriba}>
            <div className={styles.ContenedorImagenVenta} onClick={onClick}>
              {props.informacion ? (
                <Image
                  className={styles.ImagenVenta}
                  alt="Imagen perfil"
                  src={
                    props.informacion.oneImage ||
                    "/Images/Defecto/Perfil/portada.png"
                  }
                  width="100"
                  height="50"
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              ) : (
                <Image
                  className={styles.ImagenVenta}
                  alt="Imagen perfil"
                  src="/Images/Defecto/Perfil/portada.png"
                  width="100"
                  height="50"
                  layout="responsive"
                  objectFit="cover"
                  priority
                />
              )}
            </div>
          </div>
          <div className={styles.ContenedorInformacionVenta}>
            <div className={styles.ContenedorImagenPerfil}>
              <FotoPerfilTarjeta user={user} />
            </div>
            <div className={styles.ContenedorInformacion} onClick={onClick}>
              <h3 className={styles.TarjetaBlogUsuario}>
                {user !== undefined
                  ? user.firstName + " " + user.lastName
                  : "Cargando..."}
              </h3>
              <h4 className={styles.TarjetaBlogTitulo}>
                {props.informacion ? props.informacion.title : "Título"}
              </h4>
            </div>
            <div className={styles.ContenedorPrecio}>
              <h2 className={styles.textoPrecio}>
                {props.informacion
                  ? accounting.formatMoney(
                      props.informacion.price.$numberDecimal,
                      { symbol: "COP", format: "%v %s", precision: 0 }
                    )
                  : "Precio"}
              </h2>
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.ContenedorInteraccionVenta}>
        <div className={styles.Interacciones}>
          {props.informacion._id ? (
            <BotonLike item={props.informacion._id} />
          ) : (
            <></>
          )}
        </div>
        {props.destacado ? (
          <div className={styles.ContenedorDestacado}>
            <CartelDestacado />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default VentaTarjeta;

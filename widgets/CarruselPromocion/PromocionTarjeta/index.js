import styles from "./promocionTarjeta.module.css";
import Image from "next/image";
import FotoPerfilBanner from "../../../components/FotoPerfilBanner";
import VentaTarjetaCarrusel from "../../../components/VentaTarjetaCarrusel";

const PromocionTarjeta = (props) => {
  return (
    <div className={styles.contenedorPerfilCarrusel}>
      <div className={styles.containerPerfilCabecera}>
        <div className={styles.ContenedorImagenPortada}>
          <Image
            className={styles.ImagenPortada}
            alt="Imagen perfil"
            src={`${props.portada}`}
            width="100%"
            height="30%"
            layout="responsive"
            objectFit="cover"
            priority
          />
          <div className={styles.containerInteraccion}>
            <div className={styles.contenedorPerfil}>
              <FotoPerfilBanner
                nombre={props.nombre}
                usuario={props.usuario}
                imagenPerfil={props.imagenPerfil}
              />
            </div>
            <div className={styles.contenedorVentas}>
              <div className={styles.contenedorVenta1}>
                <VentaTarjetaCarrusel
                  producto={props.producto1}
                  precio={props.precio1}
                  Imagen={props.Imagen1}
                />
              </div>
              <div className={styles.contenedorVenta2}>
                <VentaTarjetaCarrusel
                  producto={props.producto2}
                  precio={props.precio2}
                  Imagen={props.Imagen2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromocionTarjeta;

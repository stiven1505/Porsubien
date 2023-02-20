import Image from "next/image";
import Link from "next/link";
import styles from "./ventaPaso.module.css";

const VentaPaso = () => {
    return (
        <div className={styles.contenedorProductoItem}>
          <div className={styles.contenedorInformacionItem}>
            <div className={styles.contenedorImagenProductoPerfil}>
              <Image
                className={styles.ImagenVenta}
                alt="Imagen perfil"
                src="/Images/pruebas/venta.jpg"
                width="100"
                height="50"
                layout="responsive"
                objectFit="cover"
                priority
              />
            </div>
  
            <div className={styles.contenedorTexto}>
              <h3 className={styles.TextoTitulo}>
                Celular Xiaomi Poco Phone F3 128gb 6ram 48mp Forro Celular Xiaomi
                Poco Phone F3 128gb 6ram 48mp Forro
              </h3>
              <h4 className={styles.TextoPrecio}>500.000.000.000000</h4>
            </div>
          </div>
        </div>
    );
}

export default VentaPaso;
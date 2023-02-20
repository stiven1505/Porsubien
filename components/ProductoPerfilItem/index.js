import Image from "next/image";
import Link from "next/link";
import styles from "./productoPerfilItem.module.css";

const ProductoPerfilItem = (props) => {
  return (
    <Link legacyBehavior
      href={`/producto/${
        props.product !== undefined ? props.product.slug : ""
      }`}
      passHref
    >
      <a className={styles.contenedorProductoItem}>
        <div className={styles.contenedorInformacionItem}>
          <div className={styles.contenedorImagenProductoPerfil}>
            {props.product !== undefined ? (
              <Image
                className={styles.ImagenVenta}
                alt="Imagen perfil"
                src={props.product.oneImage || "/Images/Defecto/Perfil/portada.png"}
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
                src="/Images/pruebas/venta.jpg"
                width="100"
                height="50"
                layout="responsive"
                objectFit="cover"
                priority
              />
            )}
          </div>
          <div className={styles.contenedorTexto}>
            <h3 className={styles.TextoTitulo}>
              {props.product !== undefined ? props.product.title : ""}
            </h3>
            <h4 className={styles.TextoPrecio}>
              $
              {props.product !== undefined
                ? props.product.price.$numberDecimal
                : ""}{" "}
              COP
            </h4>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProductoPerfilItem;

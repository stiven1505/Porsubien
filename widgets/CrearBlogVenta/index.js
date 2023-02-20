import styles from "./crearBlogVenta.module.css";
import Image from "next/image";
import Blog from "./Blog";
import Link from "next/link";
import { productService } from "../../services/product.service";
import { useForm } from "react-hook-form";

const Publicar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  function onSubmitForm() {
    let product = {
      paso: 30,
    };
    return productService.newProduct(product);
  }
  return (
    <div className={styles.contenedor}>
      <form
        className={styles.contenedorVenta}
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className={styles.contenedorImagen}>
          <Image
            alt={`Imagen Inicio`}
            className={styles.Imagen}
            src={`/Images/Publicar/imagenVenta.png`}
            width="50"
            height="35"
            layout="responsive"
            objectFit="contain"
            priority
          />
        </div>
        <button className={styles.Boton}>VENTA</button>
      </form>
      <div className={styles.contenedorBlog}>
        <Blog />
      </div>
    </div>
  );
};

export default Publicar;

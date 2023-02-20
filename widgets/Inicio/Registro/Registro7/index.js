import styles from "./registro7.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";

const Registro7 = ({ saveInfoInBodyFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <form className={styles.contenedor} onSubmit={handleSubmit(saveInfoInBodyFormData)}>
      <div className={styles.contenedorLogo}>
        <Image
          alt="Imagen perfil"
          src={`/Images/Logo.png`}
          width="100"
          height="100"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className={styles.contenedorTexto}>
        <p className={styles.texto}>
          Porsubien no es cualquier e-commerce, queremos que mantengas contacto
          con tus clientes y vendedores favoritos y puedas ver lo que publican.
        </p>
      </div>
      <div className={styles.contenedorInformacion}>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/Inicio/registro7.1.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Puedes crear blogs y leer los blogs de cualquier usuario, aquí
              eres libre de expresar tus gustos y opiniones.
            </p>
          </div>
        </div>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Puedes vender o comprar productos. Este es el espacio que te
              brindamos para tu comercio.
            </p>
          </div>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/Inicio/registro7.2.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorImagen}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/Inicio/registro7.3.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Recuerda crear reseñas, puedes encontrarlas en el perfil de otros
              usuarios, cuenta tu experiencia y califica con estrellas.
            </p>
          </div>
        </div>
      </div>

      <h1 className={styles.textoprincipal}>Recuerda</h1>
      <div className={styles.contenedorInformacion}>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorImagenBotones}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/Botones/meGusta.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Dar me gusta a tus blogs, productos y reseñas que más te gusten.
            </p>
          </div>
        </div>
        <div className={styles.contenedorseccion}>
          <div className={styles.contenedorImagenBotones}>
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={`/Images/Botones/Reportar.png`}
              width="100"
              height="100"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.contenedorTexto}>
            <p className={styles.texto}>
              Reportar los blogs, productos y reseñas que incumplan normas.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.contenedorBotones}>
        <button className={styles.continuar} type="submit">
          Continuar
        </button>
      </div>
    </form>
  );
};

export default Registro7;

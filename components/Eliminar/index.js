import Image from "next/image";
import styles from "./eliminar.module.css";
import { Howl } from "howler";
import Dialog from "@mui/material/Dialog";
import { useState } from "react";

const Eliminar = ({setState}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setState(false);
  };
  const onClick = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
    setOpen(true);
  };
  return (
    <div className={styles.Contenedor}>
      <div className={styles.ContenedorBoton}>
        <a className={styles.botonReportar} onClick={onClick}>
          <Image
            className={styles.imagenReportar}
            alt="Imagen Reportar"
            src="/Images/Botones/eliminar.png"
            width="100"
            height="100"
            layout="intrinsic"
            objectFit="contain"
          />
        </a>
      </div>
      <h6 className={styles.textoReportar}>Eliminar</h6>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <div className={styles.contenedorDialog}>
          <Image
            className={styles.imagenReportar}
            alt="Imagen Eliminar"
            src="/Images/Botones/eliminar.png"
            width="150"
            height="150"
            layout="intrinsic"
            objectFit="contain"
          />
          <h1 className={styles.contenedorTexto}>Eliminar</h1>
          <h2 className={styles.contenedorTexto}>
            ¿Deseas eliminar esta publicación?
          </h2>
          <div className={styles.contenedorBotones}>
            <button
              className={styles.containerBotonCancelar}
              onClick={handleClose}
            >
              <h2 className={styles.containerTextoBoton}>Cancelar</h2>
            </button>
            <button
              className={styles.containerBotonEliminar}
              onClick={handleClose}
            >
              <h2 className={styles.containerTextoBoton}>Eliminar</h2>
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Eliminar;

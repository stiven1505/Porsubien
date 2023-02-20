import styles from "./reportar.module.css";
import Image from "next/image";
import { Howl } from "howler";
import { Dialog } from "@mui/material";
import { useState } from "react";

const Reportar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
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
    {/* No se reporta, para una proxima entrega ya que de nada sirve reportar */}
      {/* <div className={styles.ContenedorBoton}>
        <a className={styles.botonReportar} onClick={onClick}>
          <Image
            className={styles.imagenReportar}
            alt="Imagen Reportar"
            src="/Images/Botones/Reportar.png"
            width="100%"
            height="100%"
            layout="intrinsic"
            objectFit="contain"
          />
        </a>
      </div>
      <h6 className={styles.textoReportar}>Reportar</h6> */}
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
        <form className={styles.contenedorDialog}>
          <Image
            className={styles.imagenReportar}
            alt="Imagen Reportar"
            src="/Images/Botones/Reportar.png"
            width="150"
            height="150"
            layout="intrinsic"
            objectFit="contain"
          />
          <h1 className={styles.contenedorTexto}>Reportar</h1>
          <h2 className={styles.contenedorTexto}>
            ¿Por qué estás reportando esta publicación?
          </h2>
          <input className={styles.inputTexto} placeholder="Título"></input>
          <textarea
            className={styles.inputTexto}
            placeholder="Descripción del reporte"
          ></textarea>
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
              <h2 className={styles.containerTextoBoton}>Enviar</h2>
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default Reportar;

import styles from "./ayuda.module.css";
import { Dialog } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

const Ayuda = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const onClick = () => {
    setOpen(true);
  };
  return (
    <div className={styles.Contenedor}>
      <button className={styles.boton1}  onClick={onClick}>
        <h2 className={styles.texto}>Ayuda</h2>
      </button>
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
            src="/Images/Botones/Ayuda.png"
            width="150"
            height="150"
            layout="intrinsic"
            objectFit="contain"
          />
          <h1 className={styles.contenedorTexto}>Ayuda</h1>
          <h2 className={styles.contenedorTexto}>
          Para atender a cualquier solicitud referente a la aplicación, fallo o queja, escribirnos en Whatsapp
          </h2>
          <div className={styles.contenedorBotones}>
            <button
              className={styles.containerBotonNo}
              onClick={handleClose}
            >
              <h2 className={styles.containerTextoBoton}>NO</h2>
            </button>
            <button
              className={styles.containerBotonSi}
              onClick={handleClose}
            >
              <h2 className={styles.containerTextoBoton}>SI</h2>
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default Ayuda;

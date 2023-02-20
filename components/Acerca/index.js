import styles from "./acerca.module.css";
import { Dialog } from "@mui/material";
import { useState } from "react";
import Image from "next/image";

const Acerca = () => {
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
        <h2 className={styles.texto}>Acerca de Porsubien</h2>
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
            className={styles.imagenLogo}
            alt="Imagen Reportar"
            src="/Images/Logo2.png"
            width="150"
            height="150"
            layout="intrinsic"
            objectFit="contain"
          />
          <h1 className={styles.contenedorTexto}>Acerca de Porsubien</h1>
          <p className={styles.contenedorTexto}>
          Aqui ira acerca de por su bien.qqqqqqq qqqqqq qqqqq
          qqqqqq qqqqqqq qqqqqqqqqqq qqqq qqqqqq qqqqq
          qqqq qqqq qqqq qqqqqqqqqq qq qqqqqqqqq qqqqq qqqqqqqq
          qqqq qqqqqqqqq qqqqqqqqqqq qqqqqqqqq qqqqqq qqqqqqqq
          qqqqqqqqqqqq qqqqqq qqqqqqqqqqqqqqqqqq qqqqqqqqqqq
          qqqqqqqqqqq qqqqqq qqqqq qqqqqqqqq qqqqqq qqqqqqq qqq
          qqqqqqq qqqq qqqq qqqq qqqqqq qqqq qqqqqqqqq qqqqqqqqqq
          qqqqqqq qqqqqqqqqq qqqqqq qqqqq qqqq qqqqqq
          </p>
          <div className={styles.contenedorBotones}>
            <button
              className={styles.containerBotonSalir}
              onClick={onClick}>

              <h2 className={styles.containerTextoBoton}>Salir</h2>

            </button>
            
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default Acerca;

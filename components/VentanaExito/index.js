import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import styles from "./ventanaExito.module.css";

const VentanaExito = (props) => {
  const [open, setOpen] = useState(props.open);

  const handleClose = () => {
    setOpen(false);
    Router.push("/publicar");
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        style: {
          background: "rgba(255, 255, 255, 0.7)",
          border: "2px solid #FFFFFF",
          boxSizing: "border-box",
          backdropFilter: "blur(50px)",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "500px",
          zIndex: "2",
        },
      }}
    >
      <div className={styles.contenedorVentana}>
        <div className={styles.contenedorImagen}>
          <Image
            alt="Imagen perfil"
            src={`/Images/Defecto/exito.png`}
            width="100"
            height="100"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className={styles.contenedorImagenBorde}>
          <Image
            alt="Imagen perfil"
            src={`/Images/Defecto/exito2.png`}
            width="100"
            height="100"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className={styles.contenedorImagenBorde2}>
          <Image
            alt="Imagen perfil"
            src={`/Images/Defecto/exito3.png`}
            width="100"
            height="100"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <h2 style={{ fontWeight: "500" }}>
          Tu publicación se publico con exito
        </h2>
      </div>
    </Dialog>
  );
};

export default VentanaExito;

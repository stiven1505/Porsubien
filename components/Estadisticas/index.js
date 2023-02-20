import { useState } from "react";
import styles from "./estadisticas.module.css";
import { Dialog } from "@mui/material";
import { Howl } from "howler";
import EditIcon from "@mui/icons-material/Edit";

const Estadisticas = () => {
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
    <div>
      <a className={styles.contenedor} onClick={onClick}>
        <EditIcon style={{ color: "#FFBBAD" }} />
        <p className={styles.texto}>Estadísticas</p>
      </a>
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
          <h1 className={styles.contenedorTexto}>Estadísticas</h1>
          <h3 className={styles.contenedorTexto}>
            Interacciones con el botón de whatsapp
          </h3>
          <div className={styles.contenedorgrupoTexto}>
            <p className={styles.contenedorTexto}>Total</p>
            <h2 className={styles.contenedorTexto}>245 personas</h2>
          </div>
          <h3 className={styles.contenedorTexto}>Me gusta</h3>
          <div className={styles.contenedorgrupoTexto}>
            <p className={styles.contenedorTexto}>Total</p>
            <h2 className={styles.contenedorTexto}>245 Me gusta</h2>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Estadisticas;

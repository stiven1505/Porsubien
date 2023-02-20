import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./botonCompartir.module.css";
import MuiAlert from "@mui/material/Alert";
import { forwardRef, useState } from "react";
import { Snackbar } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Howl } from "howler";

const BotonCompartir = () => {
  const [open, setOpen] = useState(false);
  const { asPath } = useRouter();
  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    setOpen(true);
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={styles.contenedorBotonCompartir}>
    <CopyToClipboard
      text={`http://localhost:3000${asPath}`}
    >
      <a className={styles.contenedorImagen} onClick={handleClick}>
        <Image
          className={styles.imagenCompartir}
          alt="Imagen me gusta"
          src="/Images/Botones/compartir.png"
          width="20"
          height="25"
          layout="intrinsic"
          objectFit="contain"
        />
      </a></CopyToClipboard>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} variant="standard" severity="success" color="info" sx={{ width: "100" }}>
          ¡Copiaste el link con éxito!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BotonCompartir;

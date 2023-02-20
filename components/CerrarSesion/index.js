import styles from "./cerrarSesion.module.css";
import { Dialog } from "@mui/material";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { userService } from '../../services';

const CerrarSesion = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    // redirect to home if already logged in
    if (!userService.userValue) {
      router.push("/");
    }
    //eslint-disable-next-line
  }, []);
  const handleNo = () => {
    setOpen(false);
  };

  function handleClose(){
    setOpen(false);
    userService.logout()
  };
  const onClick = () => {
    setOpen(true);
  };
  return (
    <div className={styles.Contenedor}>
      <button className={styles.cerrarSesion} onClick={onClick}>
        <h2 className={styles.texto}>Cerrar sesión</h2>
      </button>
      <Dialog
        open={open}
        onClose={handleNo}
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
            src="/Images/Botones/salir.png"
            width="15"
            height="150"
            layout="intrinsic"
            objectFit="contain"
          />
          <h1 className={styles.contenedorTexto}>Cerrar sesión</h1>
          <h2 className={styles.contenedorTexto}>
            ¿Estás seguro de cerrar sesión?
          </h2>
          <div className={styles.contenedorBotones}>
            <button className={styles.containerBotonNo} onClick={handleNo}>
              <h2 className={styles.containerTextoBoton}>NO</h2>
            </button>
            <Link legacyBehavior href={`/`} key={"salir"} passHref>
              <button className={styles.containerBotonSi} onClick={handleClose}>
                <h2 className={styles.containerTextoBoton}>SI</h2>
              </button>
            </Link>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default CerrarSesion;

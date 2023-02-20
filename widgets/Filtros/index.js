import TuneIcon from '@mui/icons-material/Tune';
import styles from "./filtros.module.css";
import { useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import Categorias from "./categorias";
import Subcategorias from "./subcategorias";

const Filtros = () => {
  const [componente, setComponente] = useState(<Categorias />);
  const [pasos, setpasos] = useState(1);
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setComponente(<Categorias />);
    setpasos(1);
    setState(open);
  };

  const continuarClick = () => {
    if (pasos == 1) {
      setComponente(<Subcategorias />);
      setpasos(2);
    } else {
      setComponente(<Categorias />);
      setState(false);
      setpasos(1);
    }
  };

  const list = () => (
    <Box
      role="presentation"
      style={{ backgroundColor: "white" }}
      /** onClick={toggleDrawer(false)} 
      onKeyDown={toggleDrawer(false)}*/
    >
      <div className={styles.contendorpopup}>
        {componente}
        <div className={styles.contenedorBoton}>
          <button className={styles.continuar} onClick={continuarClick}>
            Continuar
          </button>
        </div>
      </div>
    </Box>
  );

  return (
    <div className={styles.contenedor}>
      <a className={styles.Boton} onClick={toggleDrawer(true)}>
        <TuneIcon style={{ color: "white" }} />
      </a>
      <p>Filtros</p>
      <SwipeableDrawer
        anchor={"bottom"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          elevation: 0,
          style: {
            backgroundColor: "transparent",
            borderRadius: "15px 15px 0px 0px",
          },
        }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default Filtros;

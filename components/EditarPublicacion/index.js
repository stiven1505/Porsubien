import EditIcon from "@mui/icons-material/Edit";
import styles from "./editarPublicacion.module.css";
import { useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import Parte1 from "./parte1";
import Parte2 from "./parte2";
import Parte3 from "./parte3";
import Parte4 from "./parte4";
import BotonAtras from "../BotonAtras";
import Eliminar from "../Eliminar";

const EditarPublicacion = () => {
  const [componente, setComponente] = useState(<Parte1 />);
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
    setpasos(1);
    setComponente(<Parte1 />);
    setState(open);
  };

  const continuarClick = () => {
    if (pasos == 1) {
      setComponente(<Parte2 />);
      setpasos(2);
    } else if (pasos == 2) {
      setComponente(<Parte3 />);
      setpasos(3);
    } else if (pasos == 3) {
      setComponente(<Parte4 />);
      setpasos(4);
    } else {
      setComponente(<Parte1 />);
      setState(false);
      setpasos(1);
    }
  };
  const atrasClick = () => {
    if (pasos == 1) {
      setState(false);
      setpasos(1);
    } else if (pasos == 2) {
      setComponente(<Parte1 />);
      setpasos(1);
    } else if (pasos == 3) {
      setComponente(<Parte2 />);
      setpasos(2);
    } else {
      setComponente(<Parte3 />);
      setpasos(3);
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
        <div
          style={{
            width: "90%",
            maxWidth: "500px",
            margin: "5px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a onClick={atrasClick}>
            <BotonAtras />
          </a>
          <Eliminar setState={setState} />
        </div>
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
    <div>
      <a className={styles.contenedor} onClick={toggleDrawer(true)}>
        <EditIcon style={{ color: "#FFBBAD" }} />
        <p className={styles.texto}>Editar</p>
      </a>
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

export default EditarPublicacion;

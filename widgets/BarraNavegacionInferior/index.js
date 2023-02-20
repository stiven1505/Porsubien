import BottomNavigation from "@mui/material/BottomNavigation";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import styles from "./barraNavegacionInferior.module.css";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Box } from "@mui/system";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Router from "next/router";
import { useRouter } from "next/router";
import Opciones from "../opciones";
import { SwipeableDrawer } from "@mui/material";
import BotonAtras from "../../components/BotonAtras";
import {variablesPersonal} from "../../InformacionPrueba";
import { userService } from "../../services";

const BarraNavegacionInferior = () => {
  //Use state para las opciones desplegables.
  const [openOpciones, setopenOpciones] = useState(false);
  //router para ir moviendose por el mapa de navegacion.
  const router = useRouter();
  //useState para el estado de la opcion seleccionada.
  const [value, setValue] = useState(router.pathname);
  //useState para usuario del perfil.
  const [usuario, setUsuario] = useState(userService.userValue.user.slug);
  //Estilo para los botones de la barra inferior
  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: gray;
  &.Mui-selected {
    color: #9DDFD5;
  }
`);
//toggle para abrir y cerrar las opciones desplegables.
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setopenOpciones(open);
  };
  //list desplegable de las opciones.
  const list = () => (
    <Box
      role="presentation"
      style={{
        backgroundColor: "white",
        width: "100%",
        maxWidth: "700px",
        display: "flex",
        flexDirection: "column",
      }}
      /** onClick={toggleDrawer(false)} 
      onKeyDown={toggleDrawer(false)}*/
    >
      <div className={styles.contendor}>
        <div className={styles.head}>
          <h1 className={styles.titulo}>Opciones</h1>
          <a onClick={toggleDrawer(false)}><BotonAtras></BotonAtras></a>
        </div>
        <Opciones></Opciones>
      </div>
    </Box>
  );
  return (
    <Box
      style={{
        width: "100%",
        position: "fixed",
        bottom: "0px",
        left: "0px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(25px)",
        zIndex: "3",
      }}
      sx={{ width: 300 }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          if (newValue == "opciones") {
            return;
          } else if (newValue == usuario) {
            setValue(newValue);
            Router.push(`/perfil/${newValue}`);
          } else {
            setValue(newValue);
            Router.push(`${newValue}`);
          }
        }}
      >
        <BottomNavigationAction
          label="Inicio"
          value="/home"
          icon={<HomeOutlinedIcon />}
          style={{ padding: "0px", minWidth: "10px" }}
        />
        <BottomNavigationAction
          label="Publicar"
          value="/publicar"
          icon={<AddCircleOutlineOutlinedIcon />}
          style={{ padding: "0px", minWidth: "10px" }}
        />
        <BottomNavigationAction
          label="Buscar"
          value="/buscar"
          icon={<SearchOutlinedIcon />}
          style={{ padding: "0px", minWidth: "10px" }}
        />
        <BottomNavigationAction
          label="Opciones"
          value="opciones"
          icon={<SettingsOutlinedIcon />}
          onClick={toggleDrawer(true)}
          style={{ padding: "0px", minWidth: "10px" }}
        />
        <SwipeableDrawer
          type="temporary"
          open={openOpciones}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          PaperProps={{
            elevation: 0,
            style: {
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          {list()}
        </SwipeableDrawer>
        <BottomNavigationAction
          label="Perfil"
          value={usuario}
          icon={<AccountCircleOutlinedIcon />}
          style={{ padding: "0px", minWidth: "10px" }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BarraNavegacionInferior;

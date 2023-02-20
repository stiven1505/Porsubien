import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./buscador.module.css";


const Buscador = (props) => {
  const handleBusqueda = props.handleBusqueda;
  return (
    <div className={styles.buscador}>
        <div className={styles.iconoBuscador}>
          <SearchIcon />
        </div>
        <InputBase
          className={styles.inputBuscador}
          style={{ fontSize: "13px" }}
          placeholder="Buscar en porsubien..."
          inputProps={{ "aria-label": "search" }}
          disabled={props.disabled}
          onKeyDown={handleBusqueda}
        />
       
      

    </div>
    

  );
};

export default Buscador;

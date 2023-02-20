import styles from "./ubicacion.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Ubicacion = (props) => {
  return (
    <div className={styles.contenedorUbicacion}>
      <LocationOnOutlinedIcon style={{ color: "gray" }} />
      <div className={styles.textoUbicacion}>
        <p>{props.ubication || "Cali"} </p>
      </div>
    </div>
  );
};

export default Ubicacion;

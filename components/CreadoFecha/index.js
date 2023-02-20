import styles from "./creadaFecha.module.css";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

const CreadoFecha = (props) => {
  return (
    <div className={styles.contenedorFecha}>
      <DateRangeOutlinedIcon style={{ color: "gray" }} />
      <div className={styles.textoFecha}>
        <p>Creado el {props.fecha !== undefined ? props.fecha.split("T")[0] : "0-0-0"}</p>
      </div>
    </div>
  );
};

export default CreadoFecha;

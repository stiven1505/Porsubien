import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import styles from "./numeroTelefono.module.css"

const NumeroTelefono = (props) => {
  return (
    <div className={styles.contenedorIcono}>
      <PhoneOutlinedIcon style={{ color: "gray" }} />
      <div className={styles.textoNumero}>
        <p>{props.numero || ""}</p>
      </div>
    </div>
  );
};

export default NumeroTelefono;

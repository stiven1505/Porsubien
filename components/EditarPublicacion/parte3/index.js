import { useState } from "react";
import accounting from "accounting";
import styles from "../editarPublicacion.module.css";
import Disponible from "../../Disponible";

const Parte3 = () => {
  const [price, setPrice] = useState(0);
  const onChangePrecio = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div className={styles.contenedor3}>
      <form className={styles.contenedorForm3}>
        <div className={styles.inputText3}>
          <Disponible />
        </div>

        <p className={styles.texto3}>Título del anuncio</p>
        <input
          type="text"
          placeholder="Tenis"
          key="titulo"
          required
          className={styles.inputText3}
        ></input>
        <p className={styles.texto3}>Numero de contacto</p>
        <input
          type="tel"
          pattern="[0-9]{10}"
          key="numero"
          placeholder="3121111111"
          required
          className={styles.inputText3}
        ></input>
        <p className={styles.texto3}>Descripción</p>
        <textarea
          type="text"
          key="desc"
          placeholder="Descripción para tu producto, anota todos los requisitos que veas convenientes"
          className={styles.areaText3}
          required
        ></textarea>
        <p className={styles.texto3}>
          Precio:{" "}
          {accounting.formatMoney(price, {
            symbol: "COP",
            format: "%v %s",
            precision: 0,
          })}
        </p>
        <input
          type="number"
          key="precio"
          pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
          placeholder="300.000"
          required
          onChange={onChangePrecio}
          className={styles.inputText3}
        ></input>
        <p className={styles.texto3}>Ubicación</p>
        <input
          type="text"
          key="location"
          placeholder="Cali - Colombia"
          required
          className={styles.inputText3}
        ></input>
      </form>
    </div>
  );
};

export default Parte3;

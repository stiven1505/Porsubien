import Image from "next/image";
import { variablesSubcategorias } from "../../../InformacionPrueba";
import styles from "../editarPublicacion.module.css";
import { useState } from "react";

const Parte2 = () => {
  /** Se crea una variable para marcar si una opción fue elegida o no */
  const [checkedState, setCheckedState] = useState(
    new Array(variablesSubcategorias.length).fill(false)
  );
  /** onChange que solo deja seleccionar una de las subcategorías. */
  const handleOnChange = (position) => {
    if (!checkedState.includes(true)) {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
      setCheckedState(updatedCheckedState);
    } else {
      const array = new Array(checkedState.length).fill(false);
      const updatedCheckedState = array.map((item, index) =>
        index === position ? !item : item
      );
      setCheckedState(updatedCheckedState);
    }
  };
  return (
    <div className={styles.contenedor2}>
      <h1 className={styles.texto1}>Tecnología</h1>
      <form className={styles.contenedorcategorías2}>
        {variablesSubcategorias.map((catg, index) => (
          <div key={catg.Nombre} className={styles.categoria2}>
            <div key={catg.Nombre} className={styles.categoria2} id="slide-1">
              <input
                type="checkbox"
                name={catg.Nombre}
                value={catg.Nombre}
                key={`input-${catg.Nombre}`}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                id={catg.Nombre}
                className={styles.inputcategoria2}
              />
              <label
                htmlFor={catg.Nombre}
                key={`text-${catg.Nombre}`}
                className={styles.labelcategoria2}
              >
                {catg.Nombre}
              </label>
            </div>
            <hr className={styles.divider2}></hr>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Parte2;

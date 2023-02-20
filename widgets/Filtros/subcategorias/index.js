import { variablesSubcategorias } from "../../../InformacionPrueba";
import {  useState } from "react";
import styles from "./subCategorias.module.css"
const Subcategorias = () => {
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
    <div className={styles.contenedor}>{window.scrollTo(0, 0)}
      <hr className={styles.barra}></hr>
      <h1>Categorías</h1>
      <div className={styles.contenedorcategorías}>
        {variablesSubcategorias.map((catg, index) => (
          <div key={catg.Nombre} className={styles.categoria}>
            <div key={catg.Nombre} className={styles.categoria} id="slide-1">
              <input
                type="checkbox"
                name={catg.Nombre}
                value={catg.Nombre}
                key={`input-${catg.Nombre}`}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
                id={catg.Nombre}
                className={styles.inputcategoria}
              />
              <label
                htmlFor={catg.Nombre}
                key={`text-${catg.Nombre}`}
                className={styles.labelcategoria}
              >
                {catg.Nombre}
              </label>
            </div>
            <hr className={styles.divider}></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subcategorias;

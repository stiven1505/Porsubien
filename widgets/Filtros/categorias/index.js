import { variablesCategorias } from "../../../InformacionPrueba";
import Categoria from "../../../components/Categoria";
import styles from "./categorias.module.css";
import { useState } from "react";

const Categorias = () => {
  /** Se crea una variable para marcar si una opción fue elegida o no */
  const [checkedState, setCheckedState] = useState(
    new Array(variablesCategorias.length).fill(false)
  );
  /** onChange que solo deja seleccionar una de las categorías. */
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
    <div className={styles.contenedor}>
      <hr className={styles.barra}></hr>
      <h1>Categorías</h1>
      <div className={styles.contenedorcategorías}>
        {variablesCategorias.map((catg, index) => (
          <div key={catg.Nombre} className={styles.categoria} id="slide-1">
            <input
              type="checkbox"
              id={catg.Nombre}
              className={styles.inputcategoria}
              name={catg.Nombre}
              value={catg.Nombre}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
            <label htmlFor={catg.Nombre} className={styles.labelcategoria}>
              <Categoria
                Nombre={catg.Nombre}
                Imagen={`Images/Categorias/${catg.Link}`}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;

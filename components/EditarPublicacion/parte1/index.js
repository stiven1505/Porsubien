import { variablesCategorias } from "../../../InformacionPrueba";
import { useState } from "react";
import Categoria from "../../Categoria";
import styles from "../editarPublicacion.module.css";

const Parte1 = () => {
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
    <div className={styles.contenedor1}>
      <h1 className={styles.texto1}>Editar producto</h1>

      <form className={styles.contenedorcategorías}>
        {variablesCategorias.map((catg, index) => (
          <div key={catg.Nombre} className={styles.categoria} id="slide-1">
            <input
              type="checkbox"
              name={catg.Nombre}
              value={catg.Nombre}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
              id={catg.Nombre}
              className={styles.inputcategoria}
            />
            <label htmlFor={catg.Nombre} className={styles.labelcategoria}>
              <Categoria
                Nombre={catg.Nombre}
                Imagen={`Images/Categorias/${catg.Link}`}
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Parte1;

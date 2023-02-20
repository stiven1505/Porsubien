import { useState } from "react";
import styles from "../paso5/paso5.module.css";

const Paso6 = (props) => {
  /** Se crea una variable para marcar si una opción fue elegida o no */
  const [checkedState, setCheckedState] = useState([true, false, false]);
  const handleSelectOption = props.handleSelectOption;
  const [componentes, setComponentes] = useState([
    {
      id: 1,
      Nombre: "Blog",
    },
    {
      id: 2,
      Nombre: "Producto",
    },
    {
      id: 3,
      Nombre: "Perfil",
    },
  ]);
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
    <form className={styles.contenedor2}>
      <h1 style={{ textAlign: "center" }}>Elige lo que deseas promocionar</h1>
      {componentes.map((comp, index) => (
        <div key={comp.id} className={styles.categoria} id="slide-1">
          <input
            type="checkbox"
            name={comp.Nombre}
            value={comp.Nombre}
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
            id={comp.Nombre}
            className={styles.inputcategoria}
            onClick={handleSelectOption}
          />
          <label htmlFor={comp.Nombre} className={styles.labelcategoria}>
            <h1 className={styles.Tipo}>{comp.Nombre}</h1>
          </label>
        </div>
      ))}
    </form>
  );
};

export default Paso6;

import Basico from "./basico";
import Estandar from "./estandar";
import Premium from "./premium";
import styles from "./paso5.module.css";
import { useState } from "react";

const Paso5 = (props) => {
  /** Se crea una variable para marcar si una opción fue elegida o no */
  const [checkedState, setCheckedState] = useState([true, false, false]);
  const handleSelectPlan = props.handleSelectPlan;
  const [componentes, setComponentes] = useState([
    {
      id: 1,
      Nombre:"basico",
      componente: <Basico />,
    },
    {
      id: 2,
      Nombre:"estandar",
      componente: <Estandar />,
    },
    {
      id: 3,
      Nombre:"premium",
      componente: <Premium />,
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
    <div className={styles.contenedor}>
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
              onClick={handleSelectPlan}
            />
            <label htmlFor={comp.Nombre} className={styles.labelcategoria}>
              {comp.componente}
            </label>
          </div>
        ))}
    </div>
  );
};

export default Paso5;

import { useState } from "react";
import styles from "../../paso5/paso5.module.css";
import VentaPaso from "./VentaPaso";

const VentaPaso7 = () => {
  /** Se crea una variable para marcar si una opción fue elegida o no */
  const [checkedState, setCheckedState] = useState([true, false, false, false, false]);
  const [componentes, setComponentes] = useState([
    {
      id: 1,
      componente: <VentaPaso />,
    },
    {
      id: 2,
      componente: <VentaPaso />,
    },
    {
      id: 3,
      componente: <VentaPaso />,
    },
    {
      id: 4,
      componente: <VentaPaso />,
    },
    {
      id: 5,
      componente: <VentaPaso />,
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
      <h1 style={{ textAlign: "center" }}>
        Elige la Venta que deseas promocionar
      </h1>
      <form className={styles.contenedorProductos}>
        {componentes.map((comp, index) => (
          <div key={comp.id} className={styles.categoria} id="slide-1">
            <input
              type="checkbox"
              name={comp.id}
              value={comp.id}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
              id={comp.id}
              className={styles.inputcategoria}
            />
            <label htmlFor={comp.id} className={styles.labelcategoria}>
              {comp.componente}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default VentaPaso7;

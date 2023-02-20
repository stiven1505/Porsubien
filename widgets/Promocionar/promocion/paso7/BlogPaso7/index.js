import { useState } from "react";
import styles from "../../paso5/paso5.module.css";
import BlogTarjeta from "../../../../BlogTarjeta";

const BlogPaso7 = () => {
    /** Se crea una variable para marcar si una opción fue elegida o no */
    const [checkedState, setCheckedState] = useState([false, false, false]);
    const [componentes, setComponentes] = useState([
      {
        id: 1,
        componente: <BlogTarjeta />,

      },
      {
        id: 2,
        componente: <BlogTarjeta />,
      },
      {
        id: 3,
        componente: <BlogTarjeta />,
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
        <h1 style={{textAlign:"center"}}>Elige el Blog que deseas promocionar</h1>
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
    );
}

export default BlogPaso7;
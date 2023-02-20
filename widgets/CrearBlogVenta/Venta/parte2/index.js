import styles from "./parte2.module.css";
import Image from "next/image";
import { variablesSubcategorias } from "../../../../InformacionPrueba";
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
    <div className={styles.contenedor}>
      <div className={styles.contenedorImagen}>
        <Image
          alt="Imagen perfil"
          src={`/Images/Categorias/tecnologia.png`}
          width="100"
          height="100"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <h1>Tecnología</h1>
      <form className={styles.contenedorcategorías}>
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
      </form>
    </div>
  );
};

export default Parte2;

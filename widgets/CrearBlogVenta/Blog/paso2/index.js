import styles from "./paso2.module.css";
import { variablesCategorias } from "../../../../InformacionPrueba";
import Categoria from "../../../../components/Categoria";
import { useForm } from "react-hook-form";
import { blogService } from "../../../../services/blog.service";
import { useState } from "react";

const Paso2 = ({setpasos}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
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
  async function submit(e) {
    let categorias = "";
    let mapeo = await variablesCategorias.map((categoria) => {
      if (e[categoria.Nombre]) {
        categorias = categoria.Nombre;
      }
    });
    let blog = {
      categories: categorias,
      paso: 2,
    };
    blogService.newBlog(blog);
    return setpasos(2);
  }
  return (
    <form className={styles.contenedor} onSubmit={handleSubmit(submit)}>
      <hr className={styles.barra}></hr>
      <h1>Elige la categoría para tu publicación</h1>
      <div className={styles.contenedorcategorías}>
      {variablesCategorias.map((catg, index) => (
          <div key={catg.Nombre} className={styles.categoria} id="slide-1">
            <input
              type="checkbox"
              name={catg.Nombre}
              value={catg.Nombre}
              checked={checkedState[index]}
              id={catg.Nombre}
              className={styles.inputcategoria}
              {...register(catg.Nombre, {
                onChange: () => handleOnChange(index),
              })}
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
      <div className={styles.contenedorBoton}>
        <button className={styles.continuar}>Continuar</button>
      </div>
    </form>
  );
};

export default Paso2;

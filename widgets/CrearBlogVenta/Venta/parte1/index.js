import { useState } from "react";
import Categoria from "../../../../components/Categoria";
import { variablesCategorias } from "../../../../InformacionPrueba";
import styles from "./parte1.module.css";
import { useForm } from "react-hook-form";
import { productService } from "../../../../services/product.service";

const Parte1 = () => {
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

  async function  submit(e) {
    let product = productService.productValue;
    let categoriaProducto = "";
    let mapeo = await variablesCategorias.map((categoria) => {
      if (e[categoria.Nombre]) {

        categoriaProducto = categoria.Nombre;
      }
    });
    let product2 = {
      ...product,
      category: categoriaProducto,
      subCategory: categoriaProducto,
      paso: 60,
    };
    productService.newProduct(product2);
  }

  return (
    <div className={styles.contenedor}>
      <h1 className={styles.texto}>Crear venta</h1>
      <h2 className={styles.texto}>Selecciona la categoría de tu venta</h2>

      <form
        className={styles.contenedorcategorías}
        onSubmit={handleSubmit(submit)}
      >
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
        <div className={styles.contenedorBotones}>
          <button className={styles.continuar} type="submit">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Parte1;

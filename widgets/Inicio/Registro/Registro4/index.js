import Categoria from "../../../../components/Categoria";
import styles from "./registro4.module.css";
import { variablesCategorias } from "../../../../InformacionPrueba";
import { userService } from "../../../../services";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Registro4 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  async function  submit(e) {
    let user = userService.registerValue;
    let categorias = [];
    let mapeo = await variablesCategorias.map((categoria) => {
      if (e[categoria.Nombre]) {
        categorias.push(categoria.Nombre);
      }
    });
    let user2 = {
      ...user,
      categories: categorias,
      paso: 60,
    };
    userService.register1(user2);
  }
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.texto}>Categorías</h1>
      <h2 className={styles.texto}>
        Selecciona 1 o varias categorías que te gusten.
      </h2>

      <form
        className={styles.contenedorcategorías}
        onSubmit={handleSubmit(submit)}
      >
        {variablesCategorias.map((catg) => (
          <div key={catg.Nombre} className={styles.categoria} id="slide-1">
            <input
              type="checkbox"
              id={catg.Nombre}
              className={styles.inputcategoria}
              name={catg.Nombre}
              {...register(catg.Nombre)}
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

export default Registro4;

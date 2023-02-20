import { useState } from "react";
import styles from "./parte3.module.css";
import accounting from "accounting";
import { useForm } from "react-hook-form";
import { productService } from "../../../../services/product.service";

const Parte3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [price, setPrice] = useState(0);
  async function submit({ title, phone, description, price, ubication }) {
    let product = productService.productValue;
    let product2 = {
      ...product,
      title: title,
      phone: phone,
      description: description,
      price: price,
      ubication: ubication,
      paso: 90,
    };
    return productService.newProduct(product2);
  }
  const onChangePrecio = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div className={styles.contenedor}>
      <form className={styles.contenedorForm} onSubmit={handleSubmit(submit)}>
        <p className={styles.texto}>Título del anuncio</p>
        <input
          type="text"
          key="titulo"
          required
          className={styles.inputText}
          name="title"
          {...register("title", {
            required: { value: true, message: "El título es requerido" },
          })}
        ></input>
        <p className={styles.texto}>Numero de contacto</p>
        <input
          type="tel"
          pattern="[0-9]{10}"
          key="numero"
          required
          className={styles.inputText}
          name="phone"
          {...register("phone", {
            required: { value: true, message: "El número es requerido" },
          })}
        ></input>
        <p className={styles.texto}>Descripción</p>
        <textarea
          type="text"
          key="desc"
         
          className={styles.areaText}
          required
          name="description"
          {...register("description", {
            required: { value: true, message: "La descripción es requerida" },
          })}
        ></textarea>
        <p className={styles.texto}>
          Precio:{" "}
          {accounting.formatMoney(price, {
            symbol: "COP",
            format: "%v %s",
            precision: 0,
          })}
        </p>
        <input
          type="number"
          key="precio"
          pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
          required
          onChange={onChangePrecio}
          className={styles.inputText}
          name="price"
          {...register("price", {
            required: { value: true, message: "El precio es requerido" },
            onChange:(e) => onChangePrecio(e),
          })}
        ></input>
        <p className={styles.texto}>Ubicación</p>
        <input
          type="text"
          key="location"
          required
          className={styles.inputText}
          name="ubication"
          {...register("ubication", {
            required: { value: true, message: "La ubicación es requerida" },
          })}
        ></input>
        <div className={styles.contenedorBotones}>
          <button className={styles.continuar} type="submit">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Parte3;

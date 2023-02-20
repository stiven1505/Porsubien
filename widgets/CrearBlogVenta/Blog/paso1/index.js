import { IconButton } from "@mui/material";
import styles from "./paso1.module.css";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Input = styled("input")({
  display: "none",
});

const Paso1 = ({submit}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [portada, setPortada] = useState("/Images/Defecto/Perfil/portada.png");
  const onPortadaChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPortada(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <form className={styles.contenedor} 
    onSubmit={handleSubmit(submit)}>
      <hr className={styles.barra}></hr>
      <h1 style={{margin:"5px"}}>Crear Blog</h1>
      <div className={styles.TarjetaBlog}>
        <input
          type="text"
          placeholder="Título"
          className={styles.inputText}
          name="title"
          {...register("title", {
            required: { value: true, message: "El título es requerido" },
          })}
        ></input>
        <textarea
          type="text"
          placeholder="Descripción Blog"
          className={styles.areaText}
          name="description"
          {...register("description", {
            required: { value: true, message: "La descripción es requerida" },
          })}
        ></textarea>
        <div className={styles.contenedorImagen}>
        <p><strong>Tener en cuenta:</strong> peso máximo de cada imagen es de 10 mb</p>
          <label htmlFor="button-portada" style={{ width: "100%" }}>
            <Input
              accept="image/*"
              id="button-portada"
              type="file"
              name="header"
              style={{ width: "100%" }}
              onChange={(e) => onPortadaChange(e)}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "150px",
              }}
            >
              <Image
                className={styles.imagen}
                alt="Imagen portada"
                src={portada}
                layout="fill"
                objectFit="cover"
              />
            </IconButton>
          </label>
        </div>
      </div>
      <div className={styles.contenedorBoton}>
        <button className={styles.continuar} type="submit" >Continuar</button>
      </div>
    </form>
  );
};

export default Paso1;

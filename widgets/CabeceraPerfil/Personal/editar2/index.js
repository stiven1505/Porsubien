import Image from "next/image";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import styles from "./editar2.module.css";
import { useForm } from "react-hook-form";

const Input = styled("input")({
  display: "none",
});

const Editar2 = ({ submit, user, setUbication, ubication }) => {
  const [image, setImage] = useState(
    user.profileImage || "/Images/Defecto/Perfil/perfilDefecto.png"
  );
  const [portada, setPortada] = useState(
    user.headerImage || "/Images/Defecto/Perfil/portada.png"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const onPortadaChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPortada(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div className={styles.contenedorInformacion}>
      <hr className={styles.barra}></hr>
      <div className={styles.contenedorTitulo}>
        <h1 style={{ margin: "15px 5px" }}>Editar perfil</h1>
      </div>
      <form className={styles.contenedorForm} onSubmit={handleSubmit(submit)}>
        <div className={styles.contenedorImagenes}>
          <div className={styles.contenedorImagensubir}>
            <h4 style={{ margin: "5px 0px" }}>Foto de perfil</h4>
            <label htmlFor="button-perfil" style={{ width: "100%" }}>
              <Input
                accept="image/*"
                id="button-perfil"
                type="file"
                style={{ width: "100%" }}
                onChange={onImageChange}
                name="profile"
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{ width: "100%", height: "94px" }}
              >
                <Image
                  className={styles.imagenperfil}
                  alt="Imagen perfil"
                  src={image}
                  layout="fill"
                  objectFit="cover"
                />
              </IconButton>
            </label>
          </div>
          <div className={styles.contenedorImagensubir2}>
            <h4 style={{ margin: "5px 0px" }}>Foto de portada</h4>
            <label htmlFor="button-portada" style={{ width: "100%" }}>
              <Input
                accept="image/*"
                id="button-portada"
                type="file"
                style={{ width: "100%" }}
                onChange={onPortadaChange}
                name="header"
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                style={{
                  width: "100%",
                  height: "94px",
                  borderRadius: "0px",
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
        <input
          type="text"
          placeholder="Ubicación"
          className={styles.inputText}
          name="ubication"
          value={ubication}
          {...register("ubication", {
            required: { value: true, message: "La ubicación es requerida" },
            onChange: (e) => {
              setUbication(e.target.value);
            },
          })}
        ></input>
        <div className={styles.contenedorBoton}>
          <button className={styles.continuar} type="submit">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editar2;

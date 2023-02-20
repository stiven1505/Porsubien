import styles from "./registro3.module.css";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Input = styled("input")({
  display: "none",
});

const Registro3 = ({ submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [image, setImage] = useState(
    "/Images/Defecto/Perfil/perfilDefecto.png"
  );
  const [portada, setPortada] = useState("/Images/Defecto/Perfil/portada.png");

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
    <div className={styles.contenedor}>
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/Inicio/registro3.png`}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles.contenedorInformacion}><p style={{backgroundColor:"white", padding:"5px", borderRadius:"15px"}}><strong>Tener en cuenta:</strong> peso máximo de cada imagen es de 10 mb</p>
        <form className={styles.contenedorForm} onSubmit={handleSubmit(submit)}>
          <div className={styles.contenedorImagenes}>
            <div className={styles.contenedorImagensubir}>
              <h4 style={{ margin: "5px 0px" }}>Foto de perfil</h4>
              <label htmlFor="button-perfil" style={{ width: "100%" }}>
                {/* Register max large of 10485760 */}
                <Input
                  accept="image/*"
                  id="button-perfil"
                  type="file"
                  style={{ width: "100%" }}
                  name="profile"
                  {...register("profile", {
                    onChange: (event) => onImageChange(event),
                    maxLength: 10000000,
                  })}
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
              <p className={styles.error}>{errors?.profile?.message}</p>
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
                  {...register("header", {
                    onChange: (event) => onPortadaChange(event),
                    maxLength: 10000000,
                  })}
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
              <p className={styles.error}>{errors?.header?.message}</p>
            </div>
          </div>
          <textarea
            type="text"
            placeholder="Descripción para tu perfil"
            className={styles.areaText}
            name="bio"
            {...register("bio")}
          ></textarea>
          <p className={styles.error}>{errors?.bio?.message}</p>
          <input
            type="text"
            placeholder="Ubicación"
            className={styles.inputText}
            name="ubication"
            {...register("ubication", {
              required: { value: true, message: "La ubicación es requerida" },
            })}
          ></input>
          <p className={styles.error}>{errors?.ubication?.message}</p>
          <div className={styles.contenedorBotones}>
            <button className={styles.continuar} type="submit">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro3;

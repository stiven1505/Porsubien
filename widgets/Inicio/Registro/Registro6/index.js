import styles from "./registro6.module.css";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const Input = styled("input")({
  display: "none",
});
const Registro6 = () => {
    const [cedulaFrontal, setCedulaFrontal] = useState(
      "/Images/Inicio/cedulafrontal.png"
    );
    const [cedulaPosterior, setCedulaPosterior] = useState(
      "/Images/Inicio/cedulatrasera.png"
    );
  
    const cedulaFrontalChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        setCedulaFrontal(URL.createObjectURL(event.target.files[0]));
      }
    };
    const cedulaPosteriorChange = (event) => {
        if (event.target.files && event.target.files[0]) {
        setCedulaPosterior(URL.createObjectURL(event.target.files[0]));
        }
      };
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.texto}>Verificar perfil</h1>
      <div className={styles.contenedorImagensubir}>
        <h4 style={{ margin: "5px 0px" }} className={styles.texto}>Foto identificación parte frontal</h4>
        <label htmlFor="button-cedulaFrontal" style={{ width: "100%", maxWidth: "300px", display:"flex", justifyContent:"center"}}>
          <Input
            accept="image/*"
            id="button-cedulaFrontal"
            type="file"
            style={{ width: "100%" }}
            onChange={cedulaFrontalChange}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            style={{ width: "100%", height: "200px", borderRadius: "0px" }}
          >
            <Image
              className={styles.imagenperfil}
              alt="Imagen cedula Frontal"
              src={cedulaFrontal}
              layout="fill"
              objectFit="contain"
            />
          </IconButton>
        </label>
      </div>
      <div className={styles.contenedorImagensubir}>
        <h4 style={{ margin: "5px 0px" }} className={styles.texto}>Foto identificación parte posterior</h4>
        <label htmlFor="button-cedulaPosterior" style={{ width: "100%", maxWidth: "300px", display:"flex", justifyContent:"center"}}>
          <Input
            accept="image/*"
            id="button-cedulaPosterior"
            type="file"
            style={{ width: "100%" }}
            onChange={cedulaPosteriorChange}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            style={{ width: "100%", height: "200px", borderRadius: "0px" }}
          >
            <Image
              className={styles.imagenperfil}
              alt="Imagen perfil"
              src={cedulaPosterior}
              layout="fill"
              objectFit="contain"
            />
          </IconButton>
        </label>
      </div>
    </div>
  );
};

export default Registro6;

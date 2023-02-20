import { useState } from "react";
import styles from "../editarPublicacion.module.css";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

const Parte4 = () => {
  const [checkedState, setCheckedState] = useState(new Array(15).fill(""));
  const onChange = (position, event) => {
    if (event.target.files && event.target.files[0]) {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? URL.createObjectURL(event.target.files[0]) : item
      );
      setCheckedState(updatedCheckedState);
    }
  };
  return (
    <div className={styles.contenedor4}>
      <h1>Fotos del producto (Mínimo 1)</h1>
      <form className={styles.contenedorImagenes4}>
        {checkedState.map((imagen, index) => (
          <div key={index}>
            <div className={styles.contenedorImagen4}>
              <label htmlFor={index}>
                <Input
                  accept="image/*"
                  id={index}
                  type="file"
                  style={{ width: "100" }}
                  onChange={(e) => onChange(index, e)}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "5px",
                  }}
                >
                  <Image
                    className={styles.imagen4}
                    alt="Imagen portada"
                    src={
                      checkedState[index] || "/Images/Defecto/subirImagen.png"
                    }
                    layout="fill"
                    objectFit="cover"
                  />
                </IconButton>
              </label>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Parte4;

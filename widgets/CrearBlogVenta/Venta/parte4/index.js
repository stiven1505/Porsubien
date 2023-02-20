import { useState } from "react";
import styles from "./parte4.module.css";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";

const Input = styled("input")({
  display: "none",
});

const Parte4 = ({ submit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
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
    <form className={styles.contenedor} onSubmit={handleSubmit(submit)}>
      <h1>Fotos del producto (Mínimo 1)</h1>
      <p><strong>Tener en cuenta:</strong> peso máximo de cada imagen es de 10 mb</p>
      <div className={styles.contenedorImagenes}>
        {checkedState.map((imagen, index) => (
          <div key={index}>
            <div className={styles.contenedorImagen}>
              <label htmlFor={index}>
                <Input
                  accept="image/*"
                  id={index}
                  name={`image${index}`}
                  type="file"
                  style={{ width: "100%" }}
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
                    className={styles.imagen}
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
      </div>
      <div className={styles.contenedorBotones}>
        <button className={styles.continuar} type="submit">
          Continuar
        </button>
      </div>
    </form>
  );
};

export default Parte4;

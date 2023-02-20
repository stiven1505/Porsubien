import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { numeroImagenes } from "../../InformacionPrueba";
import styles from "./carruselProducto.module.css";
import ImagenProducto from "./ImagenProducto";
import { useTheme } from "@mui/material/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarruselProducto = (props) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    numeroImagenes.map((numero) => {
      if (props.producto[numero.Nombre] !== undefined) {
        return setImages((images) => [
          ...images,
          props.producto[numero.Nombre],
        ]);
      }
    });
  }, [props.producto]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
      style={{
        maxWidth: "700px",
        width: "100%",
      }}
    >
      {images.map((step, index) => (
        <div key={index} className={styles.contenedorPerfilCarrusel}>
          <div key={index} className={styles.ContenedorImagenPortada}>
            <ImagenProducto key={index} foto={step} />
          </div>
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
};

export default CarruselProducto;

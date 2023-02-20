import PromocionTarjeta from "./PromocionTarjeta";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { variablesCarruselInicio } from "../../InformacionPrueba";
import Link from "next/link";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarruselPromocion = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {/**Mapeo de cada una de las imagenes en el slider */}
        {variablesCarruselInicio.map((step, index) => (
          <Link href={`/perfil/${index}`} key={index} passHref>
            <a>
              <PromocionTarjeta
                key={index}
                nombre={step.nombre}
                usuario={step.usuario}
                portada={step.portada}
                imagenPerfil={step.imagenPerfil}
                producto1={step.producto1}
                precio1={step.precio1}
                Imagen1={step.Imagen1}
                producto2={step.producto2}
                precio2={step.precio2}
                Imagen2={step.Imagen2}
              />
            </a>
          </Link>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
};

export default CarruselPromocion;

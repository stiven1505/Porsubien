import Paso1 from "../../../widgets/Promocionar/promocion/paso1";
import styles from "../../../styles/pasos.module.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Router from "next/router";
import BarraNavegacionInicio2 from "../../../widgets/BarraNavegacionInicio2";
import Paso2 from "../../../widgets/Promocionar/promocion/paso2";
import Paso3 from "../../../widgets/Promocionar/promocion/paso3";
import Paso4 from "../../../widgets/Promocionar/promocion/paso4";
import Paso5 from "../../../widgets/Promocionar/promocion/paso5";
import Paso6 from "../../../widgets/Promocionar/promocion/paso6";
import BlogPaso7 from "../../../widgets/Promocionar/promocion/paso7/BlogPaso7";
import VentaPaso7 from "../../../widgets/Promocionar/promocion/paso7/VentaPaso7";
import Paso8 from "../../../widgets/Promocionar/promocion/paso8";
import { useState } from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#9DDFD5" : "#9DDFD5",
  },
}));

const Pasos = () => {
  const [paso, setPaso] = useState(12);
  const [componente, setComponente] = useState(<Paso1 />);
  const [atras, setAtras] = useState("none");
  const [plan, setPlan] = useState("basico");
  const [option, setOption] = useState("Blog");
  const handleSelectPlan = (e) => {
    setPlan(e.target.value);
  };
  const handleSelectOption = (e) => {
    setOption(e.target.value);
  };

  const continuarClick = async () => {
    var test = await setPaso(paso + 12);
    var variable = paso + 12;
    if (variable > 90) {
      setPaso(100);
    }
    if (variable >= 24) {
      setAtras("");
    }
    if (variable > 84) {
      setAtras("none");
    }
    console.log(variable);
    switch (variable) {
      case 24:
        return setComponente(<Paso2 />);
      case 36:
        return setComponente(<Paso3 />);
      case 48:
        return setComponente(<Paso4 />);
      case 60:
        return setComponente(<Paso5 handleSelectPlan={handleSelectPlan} />);
      case 72:
        if (plan === "premium") {
          setPaso(100);
          setAtras("none");
          variable = 100;
          return setComponente(<Paso8 />);
        } else {
          return setComponente(
            <Paso6 handleSelectOption={handleSelectOption} />
          );
        }
      case 84:
        if (option === "Blog") {
          return setComponente(<BlogPaso7 />);
        } else if (option === "Producto") {
          return setComponente(<VentaPaso7 />);
        } else {
          setPaso(100);
          setAtras("none");
          variable = 100;
          return setComponente(<Paso8 />);
        }
      case 96:
        return setComponente(<Paso8 />);
      case 112:
        Router.push("/opciones/promocionar");
    }
  };
  const atrasClick = () => {
    //función del botón para ir atras, esto se hace con el objetivo
    if (!atras) {
      var variable = paso - 12;
      //simulación de la variable al darle atras
      if (variable < 24) {
        setPaso(12);
        setAtras("none");
        //si ya esta en la principal no cambie la barra de abajo
      } else if (variable > 84) {
        setAtras("none");
        //Desabilitar el botón si se encuentra
      } else {
        setPaso(paso - 12);
      }
      console.log(paso - 12);
      switch (paso - 12) {
        case 12:
          return setComponente(<Paso1 />);
        case 24:
          return setComponente(<Paso2 />);
        case 36:
          return setComponente(<Paso3 />);
        case 48:
          return setComponente(<Paso4 />);
        case 60:
          return setComponente(<Paso5 handleSelectPlan={handleSelectPlan} />);
        case 72:
          return setComponente(<Paso6 handleSelectOption={handleSelectOption} />);
        case 84:
          if (option === "Blog") {
            return setComponente(<BlogPaso7 />);
          } else if (option === "Producto") {
            return setComponente(<VentaPaso7 />);
          } else {
            setPaso(96);
            setAtras("none");
            variable = 96;
            return setComponente(<Paso8 />);
          }
        case 96:
          return setComponente(<Paso8 />);
      }
    }
  };
  return (
    <div className={styles.container}>
      <BarraNavegacionInicio2 />
      <div className={styles.contenedorInfo}>{componente}</div>
      <div className={styles.parteInferior}>
        <div className={styles.contenedorBotones}>
          <button
            disabled={atras}
            className={styles.atras}
            onClick={atrasClick}
            style={{ display: `${atras}` }}
          >
            Atras
          </button>
          <button className={styles.continuar} onClick={continuarClick}>
            Continuar
          </button>
        </div>
        <div className={styles.contenedorBarra}>
          <BorderLinearProgress
            variant="determinate"
            value={paso}
            style={{
              height: "20px",
              border: "2px solid #FFFFFF",
              borderRadius: "9999px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pasos;

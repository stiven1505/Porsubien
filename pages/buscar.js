import styles from "../styles/buscar.module.css";
import NavSaludoPerfil from "../components/NavSaludoPerfil";
import BarraNavegacionInferior from "../widgets/BarraNavegacionInferior";
import Buscador from "../components/Buscador";
import Filtros from "../widgets/Filtros";
import ResultadosBusqueda from "../widgets/ResultadosBusqueda";
import { useState } from "react";

const Buscar = () => {
  const [busqueda, setBusqueda] = useState("");
  const handleBusqueda = async(e) => {
    if (e.key === "Enter") {
      return setBusqueda(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.buscador}>
          <div style={{width:"100%"}}>
            <Buscador handleBusqueda={handleBusqueda}></Buscador>
          </div>
          {/* <Filtros /> */}
        </div>
      </nav>
      <ResultadosBusqueda busqueda={busqueda} />
      <BarraNavegacionInferior />
    </div>
  );
};

export default Buscar;


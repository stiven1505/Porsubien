import Categoria from "../../components/Categoria";
import styles from "./categoriasInicio.module.css";
import {variablesCategorias} from "../../InformacionPrueba";

const CategoriasInicio = () => {
  return (
    <div className={styles.contenedorSeccionCategorias2}>
      <h1 className={styles.textoTituloCategorias}>Categorías</h1>
      <div className={styles.slider}>
        {variablesCategorias.map((catg) => (
          <div key={catg.Nombre} className={styles.slide} id="slide-1">
            <Categoria
              Nombre={catg.Nombre}
              Imagen={`Images/Categorias/${catg.Link}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriasInicio;

import styles from "./productosDestacados.module.css";
import VentaTarjeta from "../VentaTarjeta";

const ProductosDestacados = () => {
  return (
    <div className={styles.contenedor}>
      <h1 className={styles.tituloDestacado}>Productos destacados</h1>
      <div className={styles.contenedorDestacados}>
        <h1>Pronto...</h1>
        {/* Aún no existe de ninguna forma la manera de crear  */}
        {/* <VentaTarjeta id={"sadas231as23d2"} destacado={true}/>
        <VentaTarjeta id={"sadas231asd422"} destacado={true}/>
        <VentaTarjeta id={"sadas231a1234sd2"} destacado={true}/> */}
      </div>
    </div>
  );
};

export default ProductosDestacados;

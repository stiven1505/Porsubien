import BarraNavegacionPerfil from "../../widgets/BarraNavegacionPerfil";
import styles from "../../styles/producto.module.css";
import CarruselProducto from "../../widgets/CarruselProducto";
import CuerpoProducto from "../../widgets/CuerpoProducto";
import ProductosDestacados from "../../widgets/ProductosDestacados";
import BarraNavegacionInferior from "../../widgets/BarraNavegacionInferior";
import { variablesPersonal } from "../../InformacionPrueba";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Personal from "../../widgets/CuerpoProducto/Personal";
import { productService } from "../../services/product.service";

const Id = () => {
  //router para identificar perfil
  const router = useRouter();
  const [producto, setProducto] = useState({});
  //useState para el pathname del perfil
  const [value, setValue] = useState(router.query.id);
  useEffect(() => {
    if (router.query.id !== undefined) {
      productService.getProduct(router.query.id|| "").then((res) => {
        setProducto(res);
      });
    }
  }, [router.query.id]);

  return (
    <div className={styles.container}>
      <BarraNavegacionPerfil />
      <CarruselProducto producto={producto} />
      {value === variablesPersonal.producto ? <Personal producto={producto}/> : <CuerpoProducto producto={producto}/>}
      <ProductosDestacados />
      <BarraNavegacionInferior />
    </div>
  );
};

export default Id;

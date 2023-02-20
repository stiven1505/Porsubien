import Head from "next/head";
import styles from "../styles/Home.module.css";
import BarraNavegacion from "../widgets/BarraNavegacion";
import BarraNavegacionInferior from "../widgets/BarraNavegacionInferior";
import BlogTarjeta from "../widgets/BlogTarjeta";
import CarruselPromocion from "../widgets/CarruselPromocion";
import CategoriasInicio from "../widgets/CategoriasInicio";
import PerfilTarjeta from "../widgets/PerfilTarjeta";
import VentaTarjeta from "../widgets/VentaTarjeta";
import { useState, useEffect } from "react";
import { followService } from "../services/follows.service";
import BotonWhatsapp from "../components/BotonWhatsapp";
import { style } from "@mui/system";

const Home = () => {

  const [publicaciones, setPublicaciones] = useState([]);


  useEffect(() => {
    followService.getItems().then((res) => {
      setPublicaciones(res);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Inicio de porsubien" />
        <link rel="icon" href="/Images/Logo2.png" />
      </Head>
      <BarraNavegacion />
      <div className={styles.bannerInicial}>
        {/* <CategoriasInicio /> */}
        {/* <CarruselPromocion /> */}
      </div>
      <main className={styles.contenedorBody}>
        <h1 className={styles.textoTitulo}>Mis Seguidos</h1>

        {publicaciones.map((publicacion) =>
          publicacion.price ? (
            <VentaTarjeta informacion={publicacion} destacado={false} key={publicacion._id} />
          ) : (
            <BlogTarjeta destacado={false} key={publicacion._id} informacion={publicacion} />
          )
        )}
        {/* No hay promociones así que la tarjeta perfil no es bueno crearla */}
         {/* <PerfilTarjeta />  */}
        
        

      </main>
      
      
      <BarraNavegacionInferior />
    </div>
  );
};

export default Home;

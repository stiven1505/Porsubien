import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import BlogTarjeta from "../BlogTarjeta";
import VentaTarjeta from "../VentaTarjeta";
import PerfilTarjeta from "../PerfilTarjeta";
import styles from "./resultadosBusqueda.module.css";
import Image from "next/image";
import { blogService } from "../../services/blog.service";
import { productService } from "../../services/product.service";
import { userService } from "../../services";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

const ResultadosBusqueda = (props) => {
  const [value, setValue] = useState(0);
  const [categoria, setCategoria] = useState(true);
  const [unknown, setUnknown] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [ventas, setVentas] = useState([]);
  const [perfiles, setPerfiles] = useState([]);
  //Useeffect para demostrar que la barra de busqueda funciona
  useEffect(() => {
    setBusqueda(props.busqueda);
    if (props.busqueda !== "") {
      blogService.searchBlog(props.busqueda).then((res) => {
        setBlogs(res.docs);
      });
      productService.searchProduct(props.busqueda).then((res) => {
        setVentas(res.docs);
      });
      userService.searchUser(props.busqueda).then((res) => {
        setPerfiles(res.docs);
      });
    }
    // if (props.busqueda === "") {
    //   setUnknown(true);
    // } else if (props.busqueda === "x") {
    //   setUnknown(true);
    // } else {
    //   setUnknown(false);
    // }
  }, [props.busqueda]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Box style={{ width: "100%", maxWidth: "700px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: "black" } }}
        textColor="inherit"
        aria-label="secondary tabs example"
        style={{
          width: "100%",
          paddingTop: "5rem",
          maxWidth: "700px",
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          zIndex: "1",
          backgroundColor: "white",
        }}
      >
        <Tab
          value={0}
          label="Productos"
          style={{ width: "33.3%" }}
          onClick={goToTop}
        />
        <Tab
          value={1}
          label="Blog"
          style={{ width: "33.4%" }}
          onClick={goToTop}
        />
        <Tab
          value={2}
          label="Usuarios"
          style={{ width: "33.3%" }}
          onClick={goToTop}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        {/* {categoria ? (
            <>
              <h1>Deporte</h1>
              <div className={styles.ContenedorImagen}>
                <Image
                  className={styles.ImagenVenta}
                  alt="Imagen perfil"
                  src="/Images/Categorias/deporte.png"
                  width="100%"
                  height="50%"
                  layout="responsive"
                  objectFit="contain"
                  priority
                />
              </div>
            </>
          ) : (
            <h1>Recomendado</h1>
          )} */}

        {/* <VentaTarjeta id={"sadas231asd2"} destacado={true} />
          <VentaTarjeta id={"sadas231asd2"} destacado={true} />
          <VentaTarjeta id={"sadas231asd2"} destacado={true} /> */}
        {ventas.length < 1 ? (
          <div className={styles.contenedor}>
            <div className={styles.ContenedorImagen}>
              <Image
                className={styles.ImagenVenta}
                alt="Imagen perfil"
                src="/Images/Defecto/ups.png"
                width="100"
                height="50"
                layout="responsive"
                objectFit="contain"
                priority
              />
            </div>
            <h1 style={{ textAlign: "center" }}>Busca lo que deseas!</h1>
            <p style={{ textAlign: "center" }}>
              No pudimos encontrar ningún resultado para tu búsqueda
            </p>
          </div>
        ) : (
          <div className={styles.contenedor}>
            <h1>Resultados</h1>
            {ventas.map((venta) => (
              <VentaTarjeta
                key={venta._id}
                informacion={venta}
                destacado={false}
              />
            ))}
          </div>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {blogs.length < 1 ? (
          <div className={styles.contenedor}>
            <div className={styles.ContenedorImagen}>
              <Image
                className={styles.ImagenVenta}
                alt="Imagen perfil"
                src="/Images/Defecto/ups.png"
                width="100"
                height="50"
                layout="responsive"
                objectFit="contain"
                priority
              />
            </div>
            <h1 style={{ textAlign: "center" }}>Busca lo que deseas!</h1>
            <p style={{ textAlign: "center" }}>
              No pudimos encontrar ningún resultado para tu búsqueda
            </p>
          </div>
        ) : (
          <div className={styles.contenedor}>
            <h1>Resultados</h1>
            {blogs.map((blog) => (
              <BlogTarjeta
                informacion={blog}
                key={blog._id}
                destacado={false}
              />
            ))}
          </div>
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {perfiles.length < 1 ? (
          <div className={styles.contenedor}>
            <div className={styles.ContenedorImagen}>
              <Image
                className={styles.ImagenVenta}
                alt="Imagen perfil"
                src="/Images/Defecto/ups.png"
                width="100"
                height="50"
                layout="responsive"
                objectFit="contain"
                priority
              />
            </div>
            <h1 style={{ textAlign: "center" }}>Busca lo que deseas!</h1>
            <p style={{ textAlign: "center" }}>
              No pudimos encontrar ningún resultado para tu búsqueda
            </p>
          </div>
        ) : (
          <div className={styles.contenedor}>
            <h1>Resultados</h1>
            {perfiles.map((perfil) => (
              <PerfilTarjeta key={perfil._id} informacion={perfil} />
            ))}
            {/* <PerfilTarjeta />
            <PerfilTarjeta />
            <PerfilTarjeta /> */}
          </div>
        )}
      </TabPanel>
    </Box>
  );
};

export default ResultadosBusqueda;

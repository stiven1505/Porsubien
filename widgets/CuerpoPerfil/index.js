import styles from "./cuerpoPerfil.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import BlogTarjeta from "../BlogTarjeta";
import ProductoPerfilItem from "../../components/ProductoPerfilItem";
import CrearReseña from "../../components/CrearReseña";
import ReseñaItem from "../../components/ReseñaItem";
import { useRouter } from "next/router";
import { variablesPersonal } from "../../InformacionPrueba";
import { productService } from "../../services/product.service";
import { reviewService } from "../../services/review.service";
import { blogService } from "../../services/blog.service";
import { userService } from "../../services/user.service";

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

const CuerpoPerfil = (props) => {
  const [value, setValue] = useState(0);
  //router para identificar perfil
  const router = useRouter();
  //useState para el pathname del perfil
  const [valorUsuario, setvalorUsuario] = useState(router.query.usuario);
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [reseñas, setreseñas] = useState([]);
  useEffect(() => {
    setvalorUsuario(router.query.usuario);
  }, [router.query.usuario]);
  useEffect(() => {
    productService.getProductByUser(props.user._id).then((res) => {
      setProducts(res.docs);
    });
    blogService.getBlogByUser(props.user._id).then((res) => {
      setBlogs(res.docs);
    });
    reviewService.getReviewByUser(props.user._id).then((res) => {
      setreseñas(res.docs);
    });
  }, [props.user._id]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tab value={0} label="Productos" style={{ width: "33.3%" }} />
        <Tab value={1} label="Blog" style={{ width: "33.4%" }} />
        <Tab value={2} label="Reseñas" style={{ width: "33.3%" }} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div className={styles.contenedorProductos}>
          {products !== undefined ? (
            products.map((product, index) => (
              <ProductoPerfilItem product={product} key={index} />
            ))
          ) : (
            <></>
          )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.contenedorBlog}>
          {blogs !== undefined ? (
            blogs.map((blog, index) => (
              <BlogTarjeta destacado={false} informacion={blog} key={index} />
            ))
          ) : (
            <></>
          )}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.contenedorReseñas}>
          {valorUsuario === userService.userValue.user.slug ? (
            <></>
          ) : (
            <div className={styles.contenedorBotonReseña}>
              <CrearReseña />
            </div>
          )}

          <div className={styles.contenedorCuerpoReseñas}>
            {reseñas !== undefined ? (
              reseñas.map((review, index) => (
                <ReseñaItem review={review} key={index} />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </TabPanel>
    </Box>
  );
};

export default CuerpoPerfil;

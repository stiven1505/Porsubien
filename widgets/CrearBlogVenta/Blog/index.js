import styles from "./blog.module.css";
import Image from "next/image";
import { useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import Paso1 from "./paso1";
import Paso2 from "./paso2";
import VentanaFallo from "../../../components/VentanaFallo";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { blogService } from "../../../services/blog.service";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Blog = () => {
  let bodyFormData = new FormData();
  const [state, setState] = useState(false);
  const [pasos, setpasos] = useState(1);
  const [charge, setCharge] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setpasos(1);
    setState(open);
  };
  async function submit({ title, description }) {
    if (error === "") {
      setCharge(true);
      let blog = blogService.blogValue;
      bodyFormData.append("categories", blog.categories);
      bodyFormData.append("title", title);
      bodyFormData.append("description", description);
      bodyFormData.append(
        "header",
        document.querySelector("input[name='header']").files[0]
      );

      let result = await blogService.postBlog(bodyFormData).then((res) => {
        if (res.status !== undefined) {
          if (res.status === 200) {
            setCharge(false);
            setState(false);
          }
        } else {
          setCharge(false);
          setError("No se pudo registrar, vuelva a intentarlo más tarde");
          blogService.deleteBlog();
        }
      });
    }
  }
  const list = () => (
    <Box
      role="presentation"
      style={{ backgroundColor: "white", borderRadius: "15px 15px 0px 0px" }}
      /** onClick={toggleDrawer(false)} 
      onKeyDown={toggleDrawer(false)}*/
    >
      <div className={styles.contendor}>
        <p className={styles.error}>{error}</p>
        {pasos == 1 ? <Paso2 setpasos={setpasos} /> : <Paso1 submit={submit} />}
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={charge}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
  return (
    <div className={styles.contenedorBlog}>
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/Publicar/imagenBlog.png`}
          width="50"
          height="35"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <button className={styles.Boton} onClick={toggleDrawer(true)}>
        BLOG
      </button>
      <SwipeableDrawer
        anchor={"bottom"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{ elevation: 0, style: { backgroundColor: "transparent" } }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default Blog;

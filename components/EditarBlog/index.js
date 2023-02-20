import EditIcon from "@mui/icons-material/Edit";
import styles from "./editarBlog.module.css";
import { useState } from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  SwipeableDrawer,
} from "@mui/material";
import BotonAtras from "../BotonAtras";
import Eliminar from "../Eliminar";
import Paso1 from "./paso1";
import Paso2 from "./paso2";
import { useForm } from "react-hook-form";
import { blogService } from "../../services/blog.service";

const EditarBlog = (props) => {
  let bodyFormData = new FormData();
  const [componente, setComponente] = useState(<Paso1 />);
  const [state, setState] = useState(false);
  const [pasos, setpasos] = useState(1);
  const [charge, setCharge] = useState(false);
  const [error, setError] = useState("");
  const [title, setTitle] = useState(props.informacion.title);
  const [description, setDescription] = useState(props.informacion.description);
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
    setComponente(
      <Paso2 setpasos={setpasos} informacion={props.informacion} />
    );
    setState(open);
  };
  async function submit({ title, description }) {
    if (error === "") {
      setCharge(true);
      let blog = blogService.blogValue;
      if (
        document.querySelector("input[name='portada']").files[0] !== undefined
      ) {
        bodyFormData.append(
          "header",
          document.querySelector("input[name='portada']").files[0]
        );
      }
      bodyFormData.append("categories", blog.categories);
      bodyFormData.append("title", title);
      bodyFormData.append("description", description);

      let result = await blogService.updateBlog(bodyFormData, props.informacion._id).then((res) => {
        console.log(res);
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
  const atrasClick = () => {
    if (pasos == 1) {
      setState(false);
      setpasos(1);
    } else {
      setComponente(
        <Paso2 setpasos={setpasos} informacion={props.informacion} />
      );
      setpasos(1);
    }
  };
  const list = () => (
    <Box
      role="presentation"
      style={{ backgroundColor: "white" }}
      /** onClick={toggleDrawer(false)} 
            onKeyDown={toggleDrawer(false)}*/
    >
      <div className={styles.contendorpopup}>
        <hr className={styles.barra}></hr>
        <div
          style={{
            width: "90%",
            maxWidth: "500px",
            margin: "5px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a onClick={atrasClick}>
            <BotonAtras />
          </a>
          {/* <Eliminar setState={setState} /> */}
        </div>
        <p className={styles.error}>{error}</p>
        {pasos == 1 ? (
          <Paso2 setpasos={setpasos} informacion={props.informacion} />
        ) : (
          <Paso1
            submit={submit}
            informacion={props.informacion}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
          />
        )}
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
    <div>
      <a className={styles.contenedor} onClick={toggleDrawer(true)}>
        <EditIcon style={{ color: "#FFBBAD" }} />
      </a>
      <SwipeableDrawer
        anchor={"bottom"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          elevation: 0,
          style: {
            backgroundColor: "transparent",
            borderRadius: "15px 15px 0px 0px",
          },
        }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default EditarBlog;

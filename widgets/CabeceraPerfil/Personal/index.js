import Image from "next/image";
import styles from "../cabeceraPerfil.module.css";
import BotonPrincipal from "../../../components/BotonPrincipal";
import { useEffect, useState } from "react";
import { Box, SwipeableDrawer } from "@mui/material";
import Editar1 from "./editar1";
import Editar2 from "./editar2";
import { useForm } from "react-hook-form";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { userService } from "../../../services";

const Personal = (props) => {
  const [pasos, setpasos] = useState(1);
  const [state, setState] = useState(false);
  let bodyFormData = new FormData();
  const [charge, setCharge] = useState(false);
  const [error, setError] = useState("");
  const [ubication, setUbication] = useState(props.user.ubication);
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
  useEffect(() => {
    if (props.user.ubication) {
      setUbication(props.user.ubication);
    }
  }, [props.user.ubication]);
  async function submit({ ubication }) {
    if (error === "") {
      setCharge(true);
      let user = userService.userPutValue;
      if (
        document.querySelector("input[name='profile']").files[0] !== undefined
      ) {
        bodyFormData.append(
          "profile",
          document.querySelector("input[name='profile']").files[0]
        );
      }
      if (
        document.querySelector("input[name='header']").files[0] !== undefined
      ) {
        bodyFormData.append(
          "header",
          document.querySelector("input[name='header']").files[0]
        );
      }
      bodyFormData.append("ubication", ubication);
      bodyFormData.append("firstName", user.firstName);
      bodyFormData.append("lastName", user.lastName);
      bodyFormData.append("bio", user.bio);
      bodyFormData.append("phone", user.phone);
      let result = await userService
        .updateUser(bodyFormData, user.slug)
        .then((res) => {
          if (res.status !== undefined) {
            if (res.status === 200) {
              setCharge(false);
              setState(false);
            }
          } else {
            setCharge(false);

            setError("No se pudo registrar, vuelva a intentarlo más tarde");
            userService.DeleteUpdate();
          }
        });
    }
  }
  const list = () => (
    <Box
      role="presentation"
      style={{ backgroundColor: "white" }}
      /** onClick={toggleDrawer(false)} 
          onKeyDown={toggleDrawer(false)}*/
    >
      <div className={styles.contendorpopup}>
        <p className={styles.error}>{error}</p>
        {pasos == 1 ? (
          <Editar1 setpasos={setpasos} user={props.user} />
        ) : (
          <Editar2
            submit={submit}
            user={props.user}
            setUbication={setUbication}
            ubication={ubication}
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
    <div className={styles.containerPortada}>
      <div className={styles.contenedorImagen}>
        {props.user ? (
          <Image
            className={styles.ImagenPortada}
            alt="Imagen perfil"
            src={props.user.headerImage || "/Images/Defecto/Perfil/portada.png"}
            width="100"
            height="45"
            layout="responsive"
            objectFit="cover"
            priority
          />
        ) : (
          <Image
            className={styles.ImagenPortada}
            alt="Imagen perfil"
            src="/Images/Defecto/Perfil/portada.png"
            width="100"
            height="45"
            layout="responsive"
            objectFit="cover"
            priority
          />
        )}
        <div className={styles.containerInteraccion}>
          <div className={styles.fotoPerfil}>
            {props.user ? (
              <Image
                className={styles.ImagenPerfil}
                alt="Imagen perfil"
                src={
                  props.user.profileImage ||
                  "/Images/Defecto/perfil/perfilDefecto.png"
                }
                width="100"
                height="100"
                layout="responsive"
                objectFit="cover"
                priority
              />
            ) : (
              <Image
                className={styles.ImagenPerfil}
                alt="Imagen perfil"
                src="/Images/Defecto/perfil/perfilDefecto.png"
                width="100"
                height="100"
                layout="responsive"
                objectFit="cover"
              />
            )}
          </div>
          <a className={styles.containerBoton} onClick={toggleDrawer(true)}>
            <BotonPrincipal titular="Editar perfil" />
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
        <div></div>
      </div>
    </div>
  );
};

export default Personal;

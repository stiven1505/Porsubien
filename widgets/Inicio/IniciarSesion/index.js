import BarraNavegacionInicio2 from "../../BarraNavegacionInicio2";
import styles from "./iniciarSesion.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from 'react';
import { userService } from '../../../services/user.service.js';

const 
IniciarSesion = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [charge, setCharge] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/home");
      console.log(userService.get)
    }
  }, [router]);

  function onSubmitForm({userName,password}) {
    
    setCharge(true);
    return userService.login(userName,password).then(() => {
        // get return url froms query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/home";
        router.push(returnUrl);
      })
      .catch((error) => {
       
        setCharge(false);
        setError("Usuario o contraseña incorrectos");
      });
  }
  return (
    <div className={styles.contenedor}>
      <BarraNavegacionInicio2 />
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/Inicio/sesion.png`}
          width="50"
          height="50"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles.contenedorInformacion}>
        <form
          className={styles.contenedorForm}
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <h1 className={styles.Titulo}>Iniciar sesión</h1>
          <input
            type="text"
            placeholder="usuario"
            name="userName"
            className={styles.inputText}
            {...register("userName", {
              required: { value: true, message: "El usuario es requerido" },
            })}
          ></input>
          <p className={styles.error}>{errors?.userName?.message}</p>
          <input
            type="password"
            placeholder="contraseña"
            name="password"
            className={styles.inputText}
            {...register("password", {
              required: { value: true, message: "La contraseña es requerida" },
            })}
          ></input>
          <p className={styles.error}>{errors?.password?.message}</p>
          <div className={styles.contenedorBotones}>
            <button type="submit" className={styles.continuar}>
              Continuar
            </button>
          </div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={charge}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <p className={styles.error}>{error}</p>
        </form>
        <hr className={styles.divider}></hr>
        <div className={styles.contenedorOpciones}>
          <div className={styles.contenedorBotones}>
            {/* <button className={styles.google}>
              <div className={styles.contenedorImagenBoton}>
                <Image
                  className={styles.imagenbutton}
                  alt="Imagen me gusta"
                  src="/Images/Botones/google.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                />
              </div>
              Continuar con Google
            </button> */}
          </div>
          <div className={styles.contenedorRegistro}>
            <h2>¿No tienes una cuenta?</h2>
            <Link legacyBehavior href={`/registro`} key={"registro"} passHref>
             <a className={styles.botonRegistro}>Regístrate</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;

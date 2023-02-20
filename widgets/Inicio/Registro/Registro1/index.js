import BarraNavegacionInicio2 from "../../../BarraNavegacionInicio2";
import styles from "./registro1.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { userService } from "../../../../services";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";

const Registro1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [charge, setCharge] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  function onSubmitForm({ userName, password }) {
    setCharge(true);
    let user = {
      userName: userName,
      password: password,
      paso:20,
    };
    return userService.register1(user);
  }
  return (
    <div className={styles.contenedor}>
      <BarraNavegacionInicio2 />
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/Inicio/registro1.png`}
          width="50"
          height="40"
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
          <h1 className={styles.Titulo}>Crea tu cuenta</h1>
          <input
            type="text"
            placeholder="usuario"
            required
            className={styles.inputText}
            name="userName"
            {...register("userName", {
              required: { value: true, message: "El usuario es requerido" },
            })}
          ></input>
          <p className={styles.error}>{errors?.userName?.message}</p>
          <input
            type="password"
            placeholder="contraseña"
            required
            className={styles.inputText}
            name="password"
            {...register("password", {
              required: { value: true, message: "La contraseña es requerida" },
            })}
          ></input>
          <p className={styles.error}>{errors?.password?.message}</p>
          <div className={styles.contenedorBotones}>
            <button className={styles.continuar} type="submit">
              Continuar
            </button>
          </div>
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
            <h2>¿Ya tienes una cuenta?</h2>
            <Link legacyBehavior href={`/sesion`} key={"sesion"} passHref>
              <a className={styles.botonRegistro}>Inicia sesión</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro1;

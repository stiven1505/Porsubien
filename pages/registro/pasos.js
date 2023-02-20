import Head from "next/head";
import styles from "../../styles/pasos.module.css";
import BarraNavegacionInicio2 from "../../widgets/BarraNavegacionInicio2";
import Registro2 from "../../widgets/Inicio/Registro/Registro2";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Registro3 from "../../widgets/Inicio/Registro/Registro3";
import Registro4 from "../../widgets/Inicio/Registro/Registro4";
import Registro5 from "../../widgets/Inicio/Registro/Registro5";
import Registro6 from "../../widgets/Inicio/Registro/Registro6";
import Registro7 from "../../widgets/Inicio/Registro/Registro7";
import Final from "../../widgets/Inicio/Registro/Final";
import { useState, useEffect } from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { userService } from "../../services";
import { useForm } from "react-hook-form";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#9DDFD5" : "#9DDFD5",
  },
}));

const Pasos = () => {
  let bodyFormData = new FormData();
  const [paso, setPaso] = useState(
    userService.registerValue !== null ? userService.registerValue.paso : 15
  );
  const [charge, setCharge] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/home");
    }
    if (!userService.registerValue) {
      router.push("/registro");
    }
  });

  async function submit({ profile, header, bio, ubication }) {
    if (error === "") {
      setCharge(true);
      //console.log(document.querySelector("input[name='profile']").files[0]);
      //console.log(document.querySelector("input[name='header']").files[0]);
      let user = userService.registerValue;
      let user2 = { ...user, bio: bio, ubication: ubication, paso: 80 };
      bodyFormData.append(
        "profile",
        document.querySelector("input[name='profile']").files[0]
      );
      bodyFormData.append(
        "header",
        document.querySelector("input[name='header']").files[0]
      );
      bodyFormData.append("userName", user.userName);
      bodyFormData.append("password", user.password);
      bodyFormData.append("email", user.email);
      bodyFormData.append("bio", bio);
      bodyFormData.append("ubication", ubication);
      bodyFormData.append("birthDate", user.birthDate);
      bodyFormData.append("phone", user.phone);
      bodyFormData.append("lastName", user.lastName);
      bodyFormData.append("firstName", user.firstName);
      bodyFormData.append("categories", user.categories);
      let result = await userService.register(bodyFormData).then((res) => {
        console.log(res);
        if (res.status !== undefined) {
          if (res.status === 200) {
            setCharge(false);
            userService.register1(user2);
          }
        } else {
          setCharge(false);
          setError("No se pudo registrar, vuelva a intentarlo más tarde");
          userService.DeleteRegister();
        }
      });
    } else {
      router.push("/registro");
    }
  }

  function saveInfoInBodyFormData() {
    let user = userService.registerValue;
    let user2 = { ...user, paso: 100 };
    userService.register1(user2);
  }
  function registerAll() {
    router.push("/sesion");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Registro</title>
        <meta name="description" content="Aplicación de porsubien" />
        <link rel="icon" href="/Images/Logo2.png" />
      </Head>
      <BarraNavegacionInicio2 />
      <p className={styles.error}>{error}</p>
      <div className={styles.contenedorInfo}>
        {/* El paso 5 y 6 no están ya que es verificar y eso aún no se piensa implementar */}
        {paso == 20 ? (
          <Registro2 setPaso={setPaso} />
        ) : paso == 40 ? (
          <Registro4 />
        ) : paso == 60 ? (
          <Registro3 submit={submit} />
        ) : paso == 80 ? (
          <Registro7 saveInfoInBodyFormData={saveInfoInBodyFormData} />
        ) : paso == 100 ? (
          <>
            <Final />
            <div className={styles.contenedorBotones}>
              <button className={styles.continuar} onClick={registerAll}>
                Continuar
              </button>
            </div>
          </>
        ) : (
          <Registro2 setPaso={setPaso} />
        )}
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={charge}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={styles.parteInferior}>
        <div className={styles.contenedorBarra}>
          <BorderLinearProgress
            variant="determinate"
            value={paso}
            style={{
              height: "20px",
              border: "2px solid #FFFFFF",
              borderRadius: "9999px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pasos;

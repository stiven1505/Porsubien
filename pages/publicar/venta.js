import Head from "next/head";
import BarraNavegacionInicio2 from "../../widgets/BarraNavegacionInicio2";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import styles from "../../styles/pasos.module.css";
import { useState } from "react";
import Parte1 from "../../widgets/CrearBlogVenta/Venta/parte1";
import Parte2 from "../../widgets/CrearBlogVenta/Venta/parte2";
import Parte3 from "../../widgets/CrearBlogVenta/Venta/parte3";
import Parte4 from "../../widgets/CrearBlogVenta/Venta/parte4";
import Router from "next/router";
import VentanaExito from "../../components/VentanaExito";
import { productService } from "../../services/product.service";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {numeros} from "../../InformacionPrueba";
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

const Venta = () => {
  const [checkedState, setCheckedState] = useState(new Array(15).fill(""));
  let bodyFormData = new FormData();
  const [paso, setPaso] = useState(
    productService.productValue !== null ? productService.productValue.paso : 20
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
  async function submit() {
    if (error === "") {
      setCharge(true);
      //console.log(document.querySelector("input[name='image0']").files[0]);
      //console.log(document.querySelector("input[name='image13']").files[0]);
         let product = productService.productValue;
         let product2 = {...product, paso:100};
         checkedState.map((item, index) => {
            if (document.querySelector("input[name='image" + index + "']").files[0] !== undefined) {
              bodyFormData.append(
                numeros[index],
                document.querySelector("input[name='image" + index + "']").files[0]
              );
            }
          }
        );
        bodyFormData.append("category", product.category);
        bodyFormData.append("subCategory", product.subCategory);
        bodyFormData.append("title", product.title);
        bodyFormData.append("description", product.description);
        bodyFormData.append("phone", product.phone);
        bodyFormData.append("price", product.price);
        bodyFormData.append("ubication", product.ubication);

        let result = await productService.postProduct(bodyFormData).then((res) => {
          console.log(res);
          if (res.status !== undefined) {
            if (res.status === 200) {
              setCharge(false);
              productService.newProduct(product2);
            }
          } else {
            setCharge(false);
            setError("No se pudo registrar, vuelva a intentarlo más tarde");
            productService.DeleteProduct();
          }
        });
      } else {
        router.push("/publicar");
    }
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
        {/* Se quita el paso2 de momento ya que aún no se usa una subcategoría para cosas específicas. */}
        {paso == 30 ? (
          <Parte1 />
        ) : paso == 60 ? (
          <Parte3 />
        ) : paso == 90 ? (
          <Parte4  submit={submit} />
        ) : paso == 100 ? (
          <VentanaExito open={true} />
        ) : (
          <Parte1 />
        )}
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={charge}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={styles.parteInferior}>
        {/* <div className={styles.contenedorBotones}>
          <button
            disabled={atras}
            className={styles.atras}
            onClick={atrasClick}
            style={{ display: `${atras}` }}
          >
            Atras
          </button>
          <button className={styles.continuar} onClick={continuarClick}>
            Continuar
          </button>
        </div> */}
        <div className={styles.contenedorBarra}>
          {console.log(paso)}
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

export default Venta;

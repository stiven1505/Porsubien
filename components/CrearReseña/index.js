import { Backdrop, CircularProgress, Dialog, Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { userService } from "../../services";
import { reviewService } from "../../services/review.service";
import styles from "./crearReseña.module.css";

const CrearReseña = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [charge, setCharge] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };
  async function submit({ comment }) {
    if (error === "") {
      setCharge(true);
      let user = await userService.getUser(router.query.usuario);
      let review = {
        comment: comment,
        review: value,
        _userReview: user._id,
      };
      let result = await reviewService
        .postReview(review)
        .then((res) => {
          setCharge(false);
          setOpen(false);
        })
        .catch((err) => {
          setError("No se pudo registrar, vuelva a intentarlo más tarde");
          setCharge(false);
        });
    }
  }
  const onClick = () => {
    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
    setOpen(true);
  };
  return (
    <div>
      <div className={styles.contenedorBotonReseña} onClick={onClick}>
        <a className={styles.contenedorImagen}>
          <Image
            className={styles.imagenReseña}
            alt="Imagen me gusta"
            src="/Images/Botones/reseña.png"
            width="25"
            height="25"
            layout="intrinsic"
            objectFit="contain"
          />
        </a>
        <p className={styles.textoBotonReseña}>Crear Reseña</p>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <form
          className={styles.contenedorDialog}
          onSubmit={handleSubmit(submit)}
        >
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={charge}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <p className={styles.error}>{error}</p>
          <Image
            className={styles.imagenReportar}
            alt="Imagen Reportar"
            src="/Images/Botones/reseña.png"
            width="150"
            height="150"
            layout="intrinsic"
            objectFit="contain"
          />
          <h1 className={styles.contenedorTexto}>Reseña</h1>
          <Rating
            name="review"
            value={value}
            precision={0.1}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <textarea
            className={styles.inputTexto}
            placeholder="Añade un comentario."
            name="comment"
            {...register("comment")}
          ></textarea>
          <div className={styles.contenedorBotones}>
            <button
              className={styles.containerBotonCancelar}
              onClick={handleClose}
            >
              <h2 className={styles.containerTextoBoton}>Cancelar</h2>
            </button>
            <button className={styles.containerBotonCalificar} type="submit">
              <h2 className={styles.containerTextoBoton}>Publicar</h2>
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default CrearReseña;

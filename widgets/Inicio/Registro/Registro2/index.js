import styles from "./registro2.module.css";
import Image from "next/image";
import { userService } from "../../../../services";
import { useForm } from "react-hook-form";

const Registro2 = ({ setPaso }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  function submit({ firstName, lastName, email, phone, birthDate }) {
    let user = userService.registerValue;
    let user2 = {
      ...user,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      birthDate: birthDate,
      paso: 40,
    };
    userService.register1(user2);
    return setPaso(30);
  }
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedorImagen}>
        <Image
          alt={`Imagen Inicio`}
          className={styles.Imagen}
          src={`/Images/Inicio/registro2.png`}
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles.contenedorInformacion}>
        <form className={styles.contenedorForm} onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder="Nombre"
            required
            className={styles.inputText}
            name="firstName"
            {...register("firstName", {
              required: { value: true, message: "El nombre es requerido" },
            })}
          ></input>
          <p className={styles.error}>{errors?.firstName?.message}</p>
          <input
            type="text"
            placeholder="Apellido"
            required
            className={styles.inputText}
            name="lastName"
            {...register("lastName", {
              required: { value: true, message: "El apellido es requerido" },
            })}
          ></input>
          <p className={styles.error}>{errors?.lastName?.message}</p>
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            className={styles.inputText}
            name="email"
            {...register("email", {
              required: { value: true, message: "El email es requerido" },
            })}
          ></input>
          <p className={styles.error}>{errors?.email?.message}</p>
          <input
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Número de celular"
            required
            className={styles.inputText}
            name="phone"
            {...register("phone", {
              required: { value: true, message: "El número es requerido" },
            })}
          ></input>
          <p className={styles.error}>{errors?.phone?.message}</p>
          <p style={{ color: "gray" }}>Fecha de nacimiento</p>
          <input
            type="date"
            placeholder="Fecha"
            required
            className={styles.inputText}
            name="birthDate"
            {...register("birthDate", {
              required: { value: true, message: "La fecha es requerido" },
            })}
          ></input>
          <p className={styles.error}>{errors?.birthDate?.message}</p>
          <div className={styles.contenedorBotones}>
            <button className={styles.continuar} type="submit">
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro2;

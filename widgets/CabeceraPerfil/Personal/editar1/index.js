import styles from "../../cabeceraPerfil.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { userService } from "../../../../services";

const Editar1 = (props) => {
  const [user, setUser] = useState(props.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  async function submit(e) {
    userService.updateSave(user);
    return props.setpasos(2);
  }
  return (
    <div className={styles.contenedorForm}>
      <hr className={styles.barra}></hr>
      <div className={styles.contenedorTitulo}>
        <h1 style={{ margin: "15px 5px" }}>Editar perfil</h1>
      </div>
      <form className={styles.contenedorForm} onSubmit={handleSubmit(submit)}>
        <p>Nombre</p>
        <input
          type="text"
          placeholder="Nombre"
          required
          className={styles.inputText}
          value={user.firstName}
          name="firstName"
          {...register("firstName", {
            required: { value: true, message: "El Nombre es requerido" },
            onChange: (e) => {
              setUser({ ...user, firstName: e.target.value });
            },
          })}
        ></input>
        <p>Apellido</p>
        <input
          type="text"
          placeholder="Apellido"
          required
          className={styles.inputText}
          value={user.lastName}
          name="lastName"
          {...register("lastName", {
            required: { value: true, message: "El Apellido es requerido" },
            onChange: (e) => {
              setUser({ ...user, lastName: e.target.value });
            },
          })}
        ></input>
        <p>Descripción</p>
        <textarea
          type="text"
          placeholder="Descripción"
          className={styles.inputText}
          value={user.bio}
          name="bio"
          {...register("bio", {
            required: { value: true, message: "La Descripción es requerida" },
            onChange: (e) => {
              setUser({ ...user, bio: e.target.value });
            },
          })}
        ></textarea>
        <p>Teléfono</p>
        <input
          type="tel"
          pattern="[0-9]{10}"
          placeholder="Número de celular"
          className={styles.inputText}
          value={user.phone}
          name="phone"
          {...register("phone", {
            required: { value: true, message: "El teléfono es requerido" },
            onChange: (e) => {
              setUser({ ...user, phone: e.target.value });
            },
          })}
        ></input>
        <div className={styles.contenedorBoton}>
          <button className={styles.continuar} type="submit">
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editar1;

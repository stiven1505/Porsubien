import Image from "next/image";
import styles from "./blogTarjeta.module.css";
import Reportar from "../../components/Reportar";
import CartelDestacado from "../../components/CartelDestacado";
import FotoPerfilTarjeta from "../../components/FotoPerfilTarjeta";
import { Howl } from "howler";
import BotonLike from "../../components/BotonLike";
import EditarBlog from "../../components/EditarBlog";
import { useEffect, useState } from "react";
import { userService } from "../../services";

const BlogTarjeta = (props) => {
  const [user, setUser] = useState({});
  const [idGuardado, setidGuardado] = useState(userService.userValue.user._id);
  useEffect(() => {
    userService.getUserById(props.informacion._user).then((res) => {
      setUser(res);
    });
  }, [props.informacion._user]);
  return (
    <div className={styles.TarjetaBlog}>
      <div className={styles.TarjetaBlogcabecera}>
        <div className={styles.TarjetaBlogImagenPerfil}>
          <FotoPerfilTarjeta user={user} />
        </div>
        <div className={styles.TarjetaBlogInformacionPerfil}>
          <h3 className={styles.TarjetaBlogUsuario}>
            {user !== undefined
              ? user.firstName + " " + user.lastName
              : "Nombre"}
          </h3>
          <h4 className={styles.TarjetaBlogTitulo}>
            {props.informacion ? props.informacion.title : "Título"}
          </h4>
        </div>
        <div className={styles.TarjetaBlogReportar}>
          {props.informacion !== undefined ? (
            props.informacion._user == idGuardado ? (
              <EditarBlog informacion={props.informacion} />
            ) : (
              <Reportar />
            )
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.TarjetaBlogContenido}>
        <p className={styles.TarjetaBlogDescripcion}>
          {props.informacion ? props.informacion.description : "Título"}
        </p>
        <div className={styles.TarjetaBlogPortada}>
          {props.informacion ? (
            <Image
              className={styles.ImagenPortada}
              alt="Imagen perfil"
              src={
                props.informacion.headerImage ||
                "/Images/Defecto/Perfil/portada.png"
              }
              width="100"
              height="50"
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
              height="50"
              layout="responsive"
              objectFit="cover"
              priority
            />
          )}
        </div>
      </div>
      <div className={styles.TarjetaBlogInteraccion}>
        <div className={styles.TarjetaBlogBotones}>
          <BotonLike item={props.informacion._id} />
        </div>
        {props.destacado ? (
          <div className={styles.TarjetaBlogDestacado}>
            <CartelDestacado />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default BlogTarjeta;

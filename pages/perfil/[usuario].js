import styles from "../../styles/usuario.module.css";
import CabeceraPerfil from "../../widgets/CabeceraPerfil";
import DescripcionPerfil from "../../widgets/DescripcionPerfil";
import CuerpoPerfil from "../../widgets/CuerpoPerfil";
import BarraNavegacionPerfil from "../../widgets/BarraNavegacionPerfil";
import BarraNavegacionInferior from "../../widgets/BarraNavegacionInferior";
import { variablesPersonal } from "../../InformacionPrueba";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Personal from "../../widgets/CabeceraPerfil/Personal";
import { userService } from "../../services";
const Usuario = () => {
  //router para identificar perfil
  const router = useRouter();
  //useState para el pathname del perfil
  const [value, setValue] = useState(router.query.usuario);
  const [usuario, setUsuario] = useState(userService.userValue.user.slug);
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    setValue(router.query.usuario);
  }, [router.query.usuario]);
  useEffect(() => {
    userService.getUser(router.query.usuario).then((res) => {
      setDocs(res);
    });
  }, [router.query.usuario]);
  return (
    <div className={styles.container}>
      <BarraNavegacionPerfil />
      {value === usuario ? <Personal user={docs} /> : <CabeceraPerfil user={docs}/>}
      <DescripcionPerfil user={docs}/>
      <CuerpoPerfil user={docs}/>
      <BarraNavegacionInferior />
    </div>
  );
};

export default Usuario;

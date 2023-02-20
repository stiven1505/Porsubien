import styles from "./botonLike.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import { ImageAspectRatioTwoTone } from "@mui/icons-material";
import { likeService } from "../../services/like.service";

const BotonLike = ({ item }) => {
  const [meGustaClickeado, setMeGustaClickeadp] = useState(false);
  const [likes, setLikes] = useState(0);
  const [id, setId] = useState("");
  useEffect(() => {
    setId(item);
    if (id !== "") {
      likeService.getLikeByItem(id).then((res) => {
        setLikes(res.length);
      });
      likeService.getifLiked(id).then((res) => {
        if (res) {
          setMeGustaClickeadp(true);
        } else {
          setMeGustaClickeadp(false);
        }
      });
    }
  }, [item, id]);
  const hanldeClick = () => {
    let data = {_item: id};
    if (meGustaClickeado) {
      likeService.unlike(id).then((res) => {
        console.log(res)
        setLikes(likes - 1);
        setMeGustaClickeadp(!meGustaClickeado);
      });
    } else {
      likeService.like(/* An object that contains the item id. */
      data).then((res) => {
        setLikes(likes + 1);
        setMeGustaClickeadp(!meGustaClickeado);
      });
    }

    const sound = new Howl({
      src: "/sounds/Sonido.mp3",
      volume: 0.2,
      html5: true,
    });
    sound.play();
  };
  return (
    <a className={styles.contenedorLike} onClick={hanldeClick}>
      <div className={styles.contenedorBotonMeGusta}>
        {meGustaClickeado ? (
          <Image
            alt="Imagen me gusta"
            src="/Images/Botones/MeGusta.png"
            width="25"
            height="25"
            layout="intrinsic"
            objectFit="contain"
          />
        ) : (
          <Image
            alt="Imagen me gusta"
            src="/Images/Botones/noMeGusta.png"
            width="25"
            height="25"
            layout="intrinsic"
            objectFit="contain"
          />
        )}
      </div>
      <h5 className={styles.textoLike}>{likes !== undefined ? likes : 0}</h5>
    </a>
  );
};

export default BotonLike;

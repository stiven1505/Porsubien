import styles from "../styles/promocionar.module.css";
import BarraNavegacionInferior from "../widgets/BarraNavegacionInferior";
import BotonAtras from "../components/BotonAtras";
import Router from "next/router";

const Informacion = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.contenedorhead}>
          <h1 className={styles.titulo}>Porsubien</h1>
        </div>
        <div className={styles.contenedorhead}>
          <a onClick={() => Router.back()}>
            <BotonAtras></BotonAtras>
          </a>
        </div>
      </div>
      <div className={styles.body}>
        <h1>Acerca de Porsubien</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          ultricies diam ut vestibulum condimentum. Duis interdum, eros ac
          accumsan maximus, mauris diam scelerisque nibh, in aliquam neque magna
          ac ipsum. Vivamus vitae porttitor libero, eu hendrerit felis. Integer
          turpis magna, rutrum ut lacinia sit amet, faucibus ut neque.
          Pellentesque vitae orci non sapien pretium lacinia. Mauris ut eleifend
          nibh. Sed id ultricies diam, id hendrerit magna. Quisque maximus nunc
          et magna faucibus tincidunt. Pellentesque dapibus, nibh at ultrices
          iaculis, sem magna tincidunt urna, ultricies dictum leo orci vel nibh.
          Cras a condimentum justo. Nunc rhoncus sodales nulla, et tincidunt ex
          consequat sit amet. Integer viverra tincidunt odio, ac consectetur
          eros lacinia ac. Aliquam erat volutpat. Etiam cursus imperdiet magna,
          at sodales quam. Vestibulum sagittis leo sem, eu porta sem laoreet
          vitae. Vivamus pretium, ipsum a laoreet cursus, velit urna blandit
          ante, id porttitor mi nisi in ipsum. Nulla dictum libero at feugiat
          ultrices. Nulla maximus efficitur pulvinar. Donec imperdiet vulputate
          diam vel molestie. Nunc quis urna vel sem lacinia tincidunt. Quisque
          metus risus, mattis lobortis purus nec, hendrerit condimentum est.
          Suspendisse maximus est in ligula placerat, id porttitor ipsum auctor.
          Sed in nulla ligula. Morbi aliquet fermentum magna, at ultrices metus
          dapibus ac. Morbi enim tellus, elementum quis laoreet vitae,
          sollicitudin sed purus. Donec a augue et enim mattis hendrerit. Nunc
          sit amet libero tempor, placerat neque non, tristique orci. Phasellus
          nec nunc ut lectus congue tempor at sit amet ex. Pellentesque
          pharetra, ante ut interdum imperdiet, metus elit molestie ante, vitae
          maximus tellus lectus in mi. Ut eleifend ante a lorem suscipit,
          commodo porttitor mauris gravida. Sed vitae lacus odio. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Vivamus et viverra
          libero. Nullam varius malesuada ultricies. Mauris orci leo, convallis
          vitae posuere non, accumsan ac sapien. Ut ac laoreet dolor, sed
          pharetra velit. Donec cursus cursus turpis. Donec eu pellentesque
          sapien, in aliquam diam. Nunc sed turpis et ipsum ullamcorper
          pharetra. Vestibulum et mattis odio. Etiam lectus ligula, fringilla
          sit amet augue sit amet, ultricies ullamcorper odio. Donec et libero
          neque. Suspendisse pulvinar sapien tempus purus interdum congue.
          Aenean ac ultricies nulla, ac rhoncus sem. Suspendisse cursus sem ut
          nisl sagittis suscipit. Maecenas eget velit ipsum. Integer pretium
          placerat erat nec vehicula. Suspendisse fermentum arcu et metus
          convallis sodales. Suspendisse ac sapien arcu. In et augue in turpis
          blandit luctus quis et diam. Vestibulum faucibus condimentum lacus id
          tristique.
        </p>
      </div>
    </div>
  );
};

export default Informacion;

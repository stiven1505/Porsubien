import "../styles/globals.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userService } from "../services";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // run auth check on initial load
    authCheck(router.asPath);

    // set authorized to false to hide page content while changing routes
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // run auth check on route change
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
    //eslint-disable-next-line
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = ["/sesion", "/", "/registro", "/registro/pasos"];
    const path = url.split("?")[0];
    if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: "/sesion",
        query: { returnUrl: router.asPath },
      });
    } else {
      setAuthorized(true);
    }
  }
  return (
    <>
      <Head>
        <title>Porsubien</title>
        <meta name="description" content="Aplicación de porsubien" />
        <link rel="icon" href="/Images/Logo2.png" />
      </Head>

      <div className="app-container bg-light">
        <div className="container pt-4 pb-4">
          {authorized && <Component {...pageProps} />}
        </div>
      </div>
    </>
  );
}

export default MyApp;

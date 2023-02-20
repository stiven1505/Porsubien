import Head from "next/head";
import styles from "../styles/Home.module.css";
import Inicio from "../widgets/Inicio";
import { useRouter } from "next/router";
import { userService } from "../services";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // redirect to home if already logged in
    if (userService.userValue) {
      router.push("/home");
    }
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Porsubien</title>
        <meta name="description" content="Aplicación de porsubien" />
        <link rel="icon" href="/Images/Logo2.png" />
      </Head>
      <Inicio />
    </div>
  );
}

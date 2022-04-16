import Header from "../components/Header/Header";
import Head from "next/head";
import React from "react";
import styles from "./app.module.scss";
import "../styles/global.scss";
import "../styles/markdown.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://necolas.github.io/normalize.css/latest/normalize.css"
        />
        <link
          rel="stylesheet"
          href="https://raw.githubusercontent.com/dracula/highlightjs/master/dracula.css"
        />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

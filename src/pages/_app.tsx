import Header from "../components/Header/Header";
import Head from "next/head";
import React from "react";
import styles from "./app.module.scss";
import "../styles/global.css";
import "../styles/markdown.scss";

const noOverlayWorkaroundScript = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {process.env.NODE_ENV !== "production" && (
          <script dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }} />
        )}

        <link href="/favicon.ico" rel="icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Montserrat:wght@900&display=swap"
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
        <div className={`${styles.content} mt-8`}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

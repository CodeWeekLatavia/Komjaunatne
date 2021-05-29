import "../styles/globals.css";
//add bootstrap 5.0
import "bootstrap/dist/css/bootstrap.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Head>
        <title>WExp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Next.js, Bootstrap 5.0, Typescript" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="author"
          content="Krišjānis Petručeņa, Anete Gūtmane, Ārtūrs Kļaviņš, Rem Vasilenko, Eduards Žeiris, Raivo Logins"
        />
      </Head>
      <Navigation/>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

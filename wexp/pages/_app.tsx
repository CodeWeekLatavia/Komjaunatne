import Router from "next/router";
import "nprogress/nprogress.css";

//add bootstrap 5.0
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from 'next/dynamic'

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import initAuth from '../util/initAuth';
import { useEffect } from 'react';
const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false },
);

initAuth();

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])
  return (
    <>
      <TopProgressBar />
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
      <Navigation />
      <div className="min-vh-100">
        <div className="mt-5 pt-2">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MyApp;

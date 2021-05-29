import "../styles/globals.css";
//add bootstrap 5.0
import "bootstrap/dist/css/bootstrap.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Next.js, Bootstrap 5.0, Typescript" />
        <meta name="author" content="Krišjānis Petručeņa, Anete Gūtmane, Ārtūrs Kļaviņš, Rem Vasilenko, Eduards Žeiris, Raivo Logins" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

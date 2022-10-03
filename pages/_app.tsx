import Head from "next/head";
import type { AppProps } from "next/app";

import { RecoilRoot } from "recoil";
import "public/base.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Fernando de Row" />
        <meta name="keywords" content="ecommerce, compralo, tienda" />
        <meta name="description" content="E-commerce de prueba" />
        <meta name="robots" content="index,follow" />
        <title>Compralo e-commerce</title>
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;

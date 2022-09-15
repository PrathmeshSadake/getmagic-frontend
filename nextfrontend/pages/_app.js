import "../styles/globals.css";

import Link from "next/link";
import Head from "next/head";
import HomeLayout from "../layouts/homelayout";

function MyApp({ Component, pageProps }) {
  return (
      Component.PageLayout ?
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
       : (
        <Component {...pageProps} />
      )  
  );
}

export default MyApp;

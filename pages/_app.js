import { useRouter } from "next/router";
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import "../styles/globals.css";

const openRoutes = [
  "/",
  "/home",
  "/signup",
  "/index",
  "/signin",
  "/logout",
  "/landingpage",
  "/faq",
];
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <React.Fragment>
      {openRoutes.includes(router.pathname) ? (
        Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )
      ) : (
        <ProtectedRoute>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </ProtectedRoute>
      )}
    </React.Fragment>
  );
}

export default MyApp;

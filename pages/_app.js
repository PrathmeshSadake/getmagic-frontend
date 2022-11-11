import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { auth } from "../config/firebase-config";
import { AuthProvider } from "../context/AuthContext";
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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    }
  });

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
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      )}
    </React.Fragment>
  );
}

export default MyApp;

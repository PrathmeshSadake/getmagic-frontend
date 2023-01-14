import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { auth } from "../config/firebase-config";
import { AuthProvider } from "../context/AuthContext";
import "../assets/fonts/GT Walsheim/stylesheet.css";
import gsap from "gsap";
import "../styles/globals.css";
import Layout from "../layout/Layout";
import Head from "next/head";

const openRoutes = [
  "/",
  "/home",
  "/signup",
  "/index",
  "/signin",
  "/logout",
  "/variant",
  "/onboarding",
  "/privacy-policy",
  "/thank-you",
  "/blogs",
  "/blogs/[slug]",
];
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     console.log(user);
  //   }
  // });

  // Code for cursor animation
  // https://codepen.io/GreenSock/pen/WNNNBpo
  if (typeof window !== "undefined") {
    // Client-side-only code
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    const ball = document.querySelector(".ball");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    gsap.ticker.add(() => {
      // adjust speed for higher refresh monitors
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  }

  return (
    <React.Fragment>
      <Head>
        <title>Kollaborate</title>
      </Head>
      {!openRoutes.includes(router.pathname) ? (
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      ) : (
        <React.Fragment>
          <Component {...pageProps} />
          {router.pathname == "/" && <div className='ball hidden lg:block' />}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default MyApp;

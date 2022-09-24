import "../styles/globals.css";
import { AuthContextProvider } from "../context/authcontext";
import { ProtectedRoutes } from "../components/protectedRoutes";
import { useRouter } from "next/router";
import { useAuth } from "../context/authcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const openRoutes = ["/", "/home", "/signup", "/index", "/signin", "/logout"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
        <ToastContainer position="top-left" theme="colored" closeOnClick newestOnTop={true} />
        {openRoutes.includes(router.pathname) ? (
          Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )
        ) : (
          <ProtectedRoutes>
            {Component.PageLayout ? (
              <Component.PageLayout>
                <Component {...pageProps} />
              </Component.PageLayout>
            ) : (
              <Component {...pageProps} />
            )}
          </ProtectedRoutes>
        )}
      </AuthContextProvider>
  );
}

export default MyApp;

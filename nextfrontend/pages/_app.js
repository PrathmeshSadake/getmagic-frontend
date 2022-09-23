import "../styles/globals.css";
import { AuthContextProvider } from "../context/authcontext";
import ProtectedRoutes from "../components/protectedRoutes";
import { useRouter } from "next/router";

const openRoutes = ["/", "home", "signup", "signin", "logout"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
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
          <Component {...pageProps} />
        </ProtectedRoutes>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;

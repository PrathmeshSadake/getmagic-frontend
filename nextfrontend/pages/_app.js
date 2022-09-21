import "../styles/globals.css";
import { AuthContextProvider } from "../context/authcontext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthContextProvider>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </AuthContextProvider>
    </div>
  );
}

export default MyApp;

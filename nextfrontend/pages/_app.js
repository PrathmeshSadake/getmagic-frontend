import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default MyApp;

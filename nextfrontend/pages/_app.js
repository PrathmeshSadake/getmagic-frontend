import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-yellow-200 min-h-screen">
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

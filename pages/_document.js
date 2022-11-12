import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className='h-full bg-white'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='h-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

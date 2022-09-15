import Link from "next/link";
import Head from "next/head";
import HomeLayout from "../layouts/homelayout";
function Home(props) {
  return (

    <section>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
    </section>
  );
}
Home.PageLayout = HomeLayout

export default Home;
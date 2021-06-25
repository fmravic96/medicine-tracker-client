import Head from "next/head";
import { HeroLanding } from "../components/HeroLanding";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dose Tracker | Home</title>
        <meta name="description" content="Dose tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <HeroLanding />
      </main>

      <footer></footer>
    </>
  );
}

import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

interface Props {}

export default function dashboard(props: Props) {
  return (
    <>
      <Head>
        <title>Dose Tracker | Dashboard</title>
        <meta name="description" content="Dose tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        asd
      </main>

      <footer></footer>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();

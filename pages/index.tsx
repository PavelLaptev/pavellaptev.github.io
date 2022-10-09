import Head from "next/head";
import type { NextPage } from "next";

import styles from "./app.module.scss";

import {
  Hero,
  Plugins,
  Resources,
  Pets,
  Articles,
  Experience
} from "../sections";

const Home: NextPage = () => {
  const handleState = () => {
    window.splitbee;
  };

  return (
    <>
      <Head>
        <title>Pavel Laptev</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/ico-32.png" />
        <link rel="icon" href="/ico-64.png" />
        <link rel="icon" href="/ico-192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pavel Laptev — digital designer" />

        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>

      <main className={styles.main}>
        <Hero />
        <Plugins />
        <Resources />
        <Pets />
        <Articles />
        <Experience />
      </main>
    </>
  );
};

export default Home;

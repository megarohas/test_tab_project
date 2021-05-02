import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TTP</title>
        <meta name="description" content="Test Tab Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>header</header>

      <main className={styles.main}>main</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
}

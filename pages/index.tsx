import Head from "next/head";
import Image from "next/image";
import { Architects_Daughter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"],
});

function Home() {
  return (
    <>
      <Head>
        <title>Children's Books</title>
        <meta name="description" content="Create books for your children!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.clouds}>
        <div className={styles.x1}>
          <div className={styles.cloud}></div>
        </div>

        <div className={styles.x2}>
          <div className={styles.cloud}></div>
        </div>

        <div className={styles.x3}>
          <div className={styles.cloud}></div>
        </div>

        <div className={styles.x4}>
          <div className={styles.cloud}></div>
        </div>

        <div className={styles.x5}>
          <div className={styles.cloud}></div>
        </div>
      </div>
      <main className={`${styles.main} ${architectsDaughter.className}`}>
        <div className={styles.description}>
          <a href="/" rel="noopener noreferrer">
            <div className={styles.logo}>
              <div className={styles.kids}>
                <span>K</span>
                <span>i</span>
                <span>d</span>
                <span>s</span>
              </div>
              <div className={styles.books}>Books!</div>
            </div>
          </a>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
        </div>

        <div className={styles.center}>
          <h1>DOWNLOAD MY FREE BOOK</h1>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Environments</h2>
            <p>Choose from desserts, mountains, rivers and more.</p>
          </div>

          <div className={styles.card}>
            <h2>Characters</h2>
            <p>Name your chameleon and update the animals he meets.</p>
          </div>

          <div className={styles.card}>
            <h2>Bilingual</h2>
            <p>Create the book in any two languages you wish.</p>
          </div>

          <div className={styles.card}>
            <h2>Age Range</h2>
            <p>From one simple word per page to a structured story.</p>
          </div>
        </div>
      </main>
      <div className={styles.grass}></div>
    </>
  );
}

export default Home;

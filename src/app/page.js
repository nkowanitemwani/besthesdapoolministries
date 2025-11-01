"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
    <main>
      <section className={styles.hero}>
        <Navbar></Navbar>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
              <h1>Bethesda Pool Ministries</h1>
              <h3>Insert text here</h3>
          </div>
          <div className={styles.heroRight}>
              <Image
                  src="/images/image.png"
                  alt="test image"
                  width={600}
                  height={400}
                  className={styles.heroImage}
                  priority
                  ></Image>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.quoteOfTheWeeek}>
          <div className={styles.iconContainer}>
    
          </div>
          <div className={styles.textContainer}>
            <h3>Quote Of The Week</h3>
            <p>insert text here</p>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.videoContainer}>
          
        </div>
      </section>
      
    </main>
    </>
  );
}

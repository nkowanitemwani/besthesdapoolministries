"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import CompactCard from "./components/cards/compactcard";
import { Quote } from "lucide-react";
import IntroVideo from "./components/introvideo";
import MissionGrid from "./components/grids/missongrid";

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
      <section >
       <CompactCard
        icon={Quote}
        title="Quote Of The Week"
        subtitle="insert text here"></CompactCard>
      </section>
      <section>
        <div className={styles.videoContainer}>
          <IntroVideo></IntroVideo>
        </div>
      </section>
      <section>
        <div className={styles.missonContainer}>
         <MissionGrid></MissionGrid>
        </div>
      </section>
      
    </main>
    </>
  );
}

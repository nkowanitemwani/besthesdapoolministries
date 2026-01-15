"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import CompactCard from "./components/cards/compactcard";
import { Quote } from "lucide-react";
import IntroVideo from "./components/introvideo";
import Membership from "./components/grids/membership";
import UpcomingEvents from "./components/grids/upcoming";
import CalenderEvents from "./components/grids/calender";
import Footer from "./components/footer";
import LocationTable from "./components/locationtable";

export default function Home() {
  return (
    <>
    <main>
      <section className={styles.hero}>
        <Navbar></Navbar>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
              <h1>Bethesda Pool Ministries</h1>
              <p>Welcome to Bethesda Pool Ministries — led by Apostle Daniel Sikwese, transforming lives through deep biblical teaching and the works of Christ.</p>
          </div>
          <div className={styles.heroRight}>
              <Image
                  src="/images/church1.jpg"
                  alt="test image"
                  width={400}
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
        subtitle="Start where you are.Use what you have. Do what you can"></CompactCard>
      </section>
      <section>
        <div className={styles.videoContainer}>
          <IntroVideo></IntroVideo>
        </div>
      </section>
      <section>
        <div className={styles.heroContainer}>
          <div className={styles.heroleft}>
              <h2>Besthesda Pool Ministries</h2>
              <p>lead by apostole daniel sikwese , insert text here...</p>
          </div>
          <div className={styles.heroRight}>
            <Image
            src="/images/pastor.jpg"
            alt="test image"
            width={400}
            height={400}
            className={styles.heroImage}
            priority></Image>
          </div>
        </div>
      </section>
      <section>
          <Membership></Membership>
      </section>
      <section>
          <h2>Where to find us</h2>
          <p>Bethesda Pool Ministries has multiple locations across zambia</p>
          <LocationTable></LocationTable>
      </section>
      <section id="upcoming">
        <div className={styles.eventsContainer}>
          <div className={styles.upcomingEventsLeft}>
             <UpcomingEvents></UpcomingEvents>
          </div>
          <div className={styles.calenderEventsRight}>
              <CalenderEvents></CalenderEvents>
          </div>

        </div>
      </section>
    <Footer></Footer>
    </main>
    </>
  );
}

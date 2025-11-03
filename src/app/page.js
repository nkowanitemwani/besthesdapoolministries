"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";
import CompactCard from "./components/cards/compactcard";
import { Quote } from "lucide-react";
import IntroVideo from "./components/introvideo";
import MissionGrid from "./components/grids/misson";
import Membership from "./components/grids/membership";
import UpcomingEvents from "./components/grids/upcoming";
import CalenderEvents from "./components/grids/calender";

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
      <section>
        <div className={styles.heroContainer}>
          <div className={styles.heroleft}>
              <h2>Besthesda Pool Ministries</h2>
              <p>lead by apostole daniel sikwese , insert text here...</p>
          </div>
          <div className={styles.heroRight}>
            <Image
            src="/images/image.png"
            alt="test image"
            width={300}
            height={300}
            className={styles.heroImage}
            priority></Image>
          </div>
        </div>
      </section>
      <section>
          <Membership></Membership>
      </section>
      <section>
        <div className={styles.locationsContainer}>
          <h2>insert text here</h2>
          <p>insert descriptive text here</p>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.locationTable}>
            <thead>
              <tr>
                <th> </th>
                <th>Name</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Ship Gate Center</td>
                <td>Kitwe West, Kitwe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Ship Gate Center</td>
                <td>Kitwe West, Kitwe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Ship Gate Center</td>
                <td>Kitwe West, Kitwe</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Ship Gate Center</td>
                <td>Kitwe West, Kitwe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <div className={styles.eventsContainer}>
          <div className={styles.upcomingEventsLeft}>
             <UpcomingEvents></UpcomingEvents>
          </div>
          <div className={styles.calenderEventsRight}>
              <CalenderEvents></CalenderEvents>
          </div>

        </div>
      </section>
      
    </main>
    </>
  );
}

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
        <div className={styles.locationsContainer}>
          <h2>Where to find us</h2>
          <p>Bethesda Pool Ministries has multiple locations across zambia</p>
        </div>
      <div className={styles.tableContainer}>
  <div className={styles.tableHeader}>
  </div>
  
  <table className={styles.locationTable}>
    <thead>
      <tr>
        <th>Location</th>
        <th>City</th>
        <th>Service times</th>
        <th>Contact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className={styles.locationName}>Ship Gate Center</div>
          <div className={styles.locationDetail}>Kitwe West campus</div>
        </td>
        <td>Kitwe</td>
        <td>
          <span className={styles.serviceTime}>Sun - 07:00</span>
          <span className={styles.serviceTimeGray}>Wed - 18:00</span>
        </td>
        <td>
          <button className={styles.directionsButton}>Get directions</button>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.locationName}>Ship Gate Center North</div>
          <div className={styles.locationDetail}>Riverside campus</div>
        </td>
        <td>Kitwe</td>
        <td>
          <span className={styles.serviceTime}>Sun - 08:30</span>
          <span className={styles.serviceTimeGray}>Thu - 18:00</span>
        </td>
        <td>
          <button className={styles.directionsButton}>Get directions</button>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.locationName}>Ship Gate Center Lusaka</div>
          <div className={styles.locationDetail}>Kablonga campus</div>
        </td>
        <td>Lusaka</td>
        <td>
          <span className={styles.serviceTime}>Sun - 09:30</span>
          <span className={styles.serviceTimeGray}>Thu - 18:00</span>
        </td>
        <td>
          <button className={styles.directionsButton}>Get directions</button>
        </td>
      </tr>
      <tr>
        <td>
          <div className={styles.locationName}>Ship Gate Center Ndola</div>
          <div className={styles.locationDetail}>City center campus</div>
        </td>
        <td>Ndola</td>
        <td>
          <span className={styles.serviceTime}>Sun - 10:00</span>
          <span className={styles.serviceTimeGray}>Fri - 17:30</span>
        </td>
        <td>
          <button className={styles.directionsButton}>Get directions</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
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

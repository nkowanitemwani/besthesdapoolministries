'use client';

import React, { useState } from "react";
import styles from "@/app/components/navbar/navbar.module.css";
import Link from "next/link";
import Button from "../button";


export default function Navbar ({...props}){
  
  const [mobileNavOpen,setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

return (
  <>
    <header {...props}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLinks}>
          <div>
            <Link href="./">Bethesda Pool Ministries</Link>
          </div>
          <div className={styles.desktopLinks}>
            <Link href="/calender">Calender</Link>
            <Link href="./#upcoming">Upcoming Events</Link>
            <Link href="/videolibrary">Video Library</Link>
          </div>
        </div>
        <Button href="/livestream" className={styles.desktopCta}>
          Live Stream
        </Button>
        <button
          className={`${styles.mobileMenuButton} ${mobileNavOpen ? styles.open : ''}`}
          onClick={toggleMobileNav}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>

    {mobileNavOpen && (
      <div className={styles.mobileOverlay}>

        <div className={styles.overlayTopBar}>
          <button className={styles.closepill} onClick={closeMobileNav}>
            ✕ Close
          </button>
        </div>

        <div className={styles.overlayContent}>

          <div className={styles.navGroup}>
            <span className={styles.groupLabel}>Menu</span>
            <Link href="/"           onClick={closeMobileNav}>Home</Link>
            <Link href="/calender"   onClick={closeMobileNav}>Calender</Link>
            <Link href="./#upcoming" onClick={closeMobileNav}>Upcoming Events</Link>
            <Link href="/videolibrary" onClick={closeMobileNav}>Video Library</Link>
            <Link href="/livestream" onClick={closeMobileNav}>Live Stream</Link>
          </div>
        </div>
      </div>
    )}
  </>
);

}
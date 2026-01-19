import React from "react";
import styles from "@/app/components/navbar/navbar.module.css";
import Link from "next/link";
import Button from "../button";


export default function Navbar (){
  return(
    <header>
        <nav className={styles.navbar}>
            <div className={styles.navbarLinks}>
                <Link href="./">Bethesda Pool Ministries</Link>
                <Link href="/calender">Calender</Link>
                <Link href="./#upcoming">Upcoming Events</Link>
                <Link href="/videolibrary">Video Library</Link>
            </div>
                <Button href="/livestream">Live Stream</Button>


        </nav>
    </header>
  );

}
import React from "react";
import styles from "@/app/components/navbar/navbar.module.css";
import Link from "next/link";
import Button from "../button";


export default function Navbar (){
  return(
    <header>
        <nav className={styles.navbar}>
            <div className={styles.navbarLinks}>
                <Link href="">Bethesda Pool Ministries</Link>
            </div>
            <div className={styles.navbarLinks}>
                <Link href="">Calender</Link>
                <Link href="">Upcoming Events</Link>
                <Link href="">Video Library</Link>

            </div>
            <div className={styles.navRight}>
                <Button href="" style={{padding : '5px 50px'}}>Live Stream</Button>
            </div>

        </nav>
    </header>
  );

}
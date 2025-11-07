import React from "react";
import styles from "./footer.module.css"
import Link from "next/link";

export default function Footer(){
    return(
        <footer>
            <div className={styles.footerInfo}>
                <div className={styles.footerInfoLeft}>
                    <div className={styles.footerInfoLeftText}>
                        <Link href="./"><h1>Bethesda Pool Ministries</h1></Link>
                        <p>With God Nothing Is Impossible</p>
                    </div>
                </div>
                <div className={styles.footerInfoCenter}>
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link href="/calender">Calender</Link></li>
                        <li><Link href="./#upcoming">Upcoming Events</Link></li>
                        <li><Link href="/videolibrary">Video Library</Link></li>
                        <li><Link href="/livestream">Live Stream</Link></li>
                    </ul>
                </div>
            </div>
            <div className={styles.termsPolicies}>
                <span><Link href="/terms">Terms Of Use</Link>{"|"}<Link href="/policies">Privacy Policy</Link></span>
            </div>
            <hr></hr>
            <p className={styles.footerText}>© 2025 Bethesda Pool Ministries Zm. All rights reserved</p>
        </footer>
    )
}
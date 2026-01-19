import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./nolive.module.css"

export default function NoLive(){
    return(
        <section className={styles.nostreamcontainer}>
            <h1>Live Stream Unavaliable</h1>
            <span>Browse through our <Link href="/videolibrary">Video Library</Link> instead</span>
            <Image 
            src="/images/nolive.png"
            alt="no live stream image"
            width={400}
            height={300}></Image>
        </section>
    );
}
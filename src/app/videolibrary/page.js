import React from "react";
import styles from "./videolibarary.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

export default function VideoLibrary() {
    return(
        <main>
            <Navbar></Navbar>
            <section>
                <h1>Bethesda pool Video Library</h1>
                <Image
                src="/images/comingsoon.png"
                alt="video library coming soon"
                width={400}
                height={300}></Image>
            </section>
            <Footer></Footer>
        </main>
    );
}
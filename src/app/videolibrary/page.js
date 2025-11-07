import React from "react";
import styles from "./videolibarary.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function VideoLibrary() {
    return(
        <main>
            <Navbar></Navbar>
            <h1>Video Library</h1>
            <Footer></Footer>
        </main>
    );
}
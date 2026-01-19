import React from "react";
import styles from "./livestream.module.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import NoLive from "../components/nolive";

export default function LiveStream(){
    return(
        <main>
            <Navbar></Navbar>
            <NoLive></NoLive>
            <Footer></Footer>
        </main>
    );
}
import React from "react";
import styles from "./calender.module.css"
import Navbar from "../components/navbar";
import Footer from "../components/footer";


export default function Calendar (){
    return(
        <>
        <main>
            <Navbar></Navbar>
            <h1>add yearly calender</h1>
            <Footer></Footer>
        </main>
        </>
    );
}
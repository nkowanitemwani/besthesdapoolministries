import React from "react";
import styles from "./membership.module.css"
import ImageCard from "../../cards/imagecard";
import { Sun } from "lucide-react";

const members = [
    {
     icon:Sun,
     title: "youth",
     image: "/images/youth.jpg"
    },
    {
     icon:Sun,
     title: "Praise and worship",
     image: "/images/praise.jpg"
    },
    {
     icon:Sun,
     title: "men",
     image: "/images/men.jpg"
    },
    {
     icon:Sun,
     title: "women",
     image: "/images/women.jpg"
    },
    {
     icon:Sun,
     title: "children",
     image: "/images/children.jpg"
    }                   
];

export default function Membership (){
    return(
    <div className={styles.membershipGrid}>
            <div className={styles.gridHeader}>
                <h1>Theres a place for you</h1>
                <p>At Bethesda Pool Ministries, we dont just want you to feel at home, we want you to be at home, because feels change. From mens and womens groups to youth, children's ministry and praise team, theres a space where you can grow,serve and belong.</p>
            </div>
        <div className={styles.cardContainer}>
            {members.map((member,index) => (
                <ImageCard
                key={index}
                icon={member.icon}
                title={member.title}
                image={member.image}></ImageCard>
            ))}
        </div>
    </div>
    );
}
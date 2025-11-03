import React from "react";
import styles from "./membership.module.css"
import ImageCard from "../../cards/imagecard";
import { Sun } from "lucide-react";

const members = [
    {
     icon:Sun,
     title: "Text",
     image: "/images/image.png"
    },
    {
     icon:Sun,
     title: "Text",
     image: "/images/image.png"
    },
    {
     icon:Sun,
     title: "Text",
     image: "/images/image.png"
    },
    {
     icon:Sun,
     title: "Text",
     image: "/images/image.png"
    },
    {
     icon:Sun,
     title: "Text",
     image: "/images/image.png"
    },
    {
     icon:Sun,
     title: "Text",
     image: "/images/image.png"
    }                    
];

export default function Membership (){
    return(
    <div className={styles.membershipGrid}>
            <div className={styles.gridHeader}>
                <h1>Insert Title</h1>
                <p>Insert text here</p>
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
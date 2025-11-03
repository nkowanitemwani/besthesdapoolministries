import React from "react";
import styles from "./upcoming.module.css"
import { AlertCircle } from "lucide-react";
import CompactCard from "../../cards/compactcard";

const upcomingevents = [
    {
        icon:AlertCircle,
        title:"Event Name",
    },
    {
        icon:AlertCircle,
        title:"Event Name",
    },
    {
        icon:AlertCircle,
        title:"Event Name",
        
    }
];


export default function UpcomingEvents() {
    return(
        <div className={styles.missionGrid}>
             <div className={styles.gridHeader}>
               <h2>Upcoming Events</h2>
             </div>
            <div className={styles.cardContainer}>
                {upcomingevents.map((upcomingevent,index) => (
                    <CompactCard
                        key={index}
                        icon={upcomingevent.icon}
                        title={upcomingevent.title}
                    />
                ))}
            </div>
        </div>
    );
}
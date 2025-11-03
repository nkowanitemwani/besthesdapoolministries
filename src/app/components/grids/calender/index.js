import React from "react";
import styles from "@/app/components/grids/misson/missiongrid.module.css";
import CompactCard from "../../cards/compactcard";
import { Calendar } from "lucide-react";

const calenderevents = [
    {
        icon:Calendar,
        title:"Event Name",
        subtitle: "Event date"
    },
    {
        icon:Calendar,
        title:"Event Name",
        subtitle: "Event date"
    },
    {
        icon:Calendar,
        title:"Event Name",
        subtitle: "Event date"
    }
];

export default function CalenderEvents() {
    return(
        <div className={styles.missionGrid}>
             <div className={styles.gridHeader}>
               <h2>Calender Events</h2>
             </div>
            <div className={styles.cardContainer}>
                {calenderevents.map((calenderevent,index) => (
                    <CompactCard
                        key={index}
                        icon={calenderevent.icon}
                        title={calenderevent.title}
                        subtitle={calenderevent.subtitle}
                    />
                ))}
            </div>
        </div>
    );
}
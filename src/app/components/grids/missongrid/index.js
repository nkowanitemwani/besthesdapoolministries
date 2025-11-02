import styles from "./missiongrid.module.css"
import CompactCard from "../../cards/compactcard";
import { Sun } from "lucide-react";

const missions = [
    {
     icon:Sun,
     title:"insert text here"
    },
    {
    icon: Sun,
    title:"insert text here"
    },
    {
    icon:Sun,
    title:"insert text here"
    }    
    
];

export default function MissionGrid(){
    return(
        <div className={styles.missionGrid}>
            <div className={styles.gridHeader}>
                <h3>Our Mission </h3>
                <h1>Inser text here</h1>
            </div>
            <div className={styles.cardContainer}>
                {missions.map((mission,index) => (
                    <CompactCard
                        key={index}
                        icon={mission.icon}
                        title={mission.title}
                    />
                ))}
            </div>
        </div>
    );
}
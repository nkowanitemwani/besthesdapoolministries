import React from "react";
import styles from "./eventcard.module.css";
import { Calendar, Users, Heart, Music, Book, User } from "lucide-react";

export default function EventCard({ date, title, description, icon: Icon }) {
  return (
    <div className={styles.eventCard}>
      <div className={styles.cardHeader}>
        <div className={styles.dateBadge}>{date}</div>
        <div className={styles.iconWrapper}>
          {Icon && <Icon size={20} />}
        </div>
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.eventTitle}>{title}</h3>
        <p className={styles.eventDescription}>{description}</p>
        <button className={styles.detailsButton}>
          View Details →
        </button>
      </div>
    </div>
  );
}
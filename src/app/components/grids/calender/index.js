import React from "react";
import styles from "./calender.module.css";

const calendarEvents = [
  {
    date: "OCT 24",
    title: "Fall Harvest Festival",
    description: "A family-friendly evening of games, food, and fellowship for the whole community."
  },
  {
    date: "NOV 05",
    title: "Leadership Conference",
    description: "Equipping church leaders with tools for ministry in the modern age."
  },
  {
    date: "DEC 24",
    title: "Christmas Eve Vigil",
    description: "Candlelight service celebrating the birth of Christ with carols and scripture."
  }
];

export default function CalendarEvents() {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.sectionHeader}>
        <h2>Calendar Events</h2>
        <p>Save the dates for these special occasions.</p>
      </div>
      <div className={styles.calendarList}>
        {calendarEvents.map((event, index) => (
          <div key={index} className={styles.calendarCard}>
            <div className={styles.dateBadge}>
              {event.date}
            </div>
            <div className={styles.calendarContent}>
              <h3 className={styles.calendarTitle}>{event.title}</h3>
              <p className={styles.calendarDescription}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
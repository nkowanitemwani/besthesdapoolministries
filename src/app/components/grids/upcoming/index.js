import React from "react";
import styles from "./upcoming.module.css";
import { Clock, Users, Heart } from "lucide-react";
import CompactCard from "../../cards/compactcard";

const upcomingEvents = [
  {
    icon: Clock,
    title: "Sunday Worship Service",
    subtitle: "Main Sanctuary • 10:00 AM"
  },
  {
    icon: Users,
    title: "Youth Ministry Night",
    subtitle: "Youth Hall • Wednesday 7:00 PM"
  },
  {
    icon: Heart,
    title: "Community Outreach",
    subtitle: "Downtown Center • Saturday 9:00 AM"
  }
];

export default function UpcomingEvents() {
  return (
    <div className={styles.eventsSection}>
      <div className={styles.sectionHeader}>
        <h2>Upcoming Events</h2>
        <p>Join us for our weekly gatherings and special services.</p>
      </div>
      <div className={styles.eventsList}>
        {upcomingEvents.map((event, index) => (
          <CompactCard
            key={index}
            icon={event.icon}
            title={event.title}
            subtitle={event.subtitle}
          />
        ))}
      </div>
    </div>
  );
}
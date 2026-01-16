import React from "react";
import styles from "./calender.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import EventCard from "../components/cards/eventcard";
import { Calendar, Users, Heart, Music, Book, User } from "lucide-react";

const calendarData = {
  year: "2026",
  subtitle: "Upcoming Ministry Calendar & Events",
  months: [
    {
      name: "January",
      events: [
        {
          date: "JAN 04",
          title: "New Year Service",
          description: "Join us for a special service to dedicate the new year to the Lord with prayer and worship.",
          icon: Calendar
        },
        {
          date: "JAN 18",
          title: "Community Gathering",
          description: "A time for fellowship, food, and connecting with new members of the congregation.",
          icon: Users
        }
      ]
    },
    {
      name: "February",
      events: [
        {
          date: "FEB 14",
          title: "Couples Conference",
          description: "A weekend workshop focused on building strong, biblical foundations for marriage.",
          icon: Heart
        },
        {
          date: "FEB 22",
          title: "Worship Night",
          description: "An evening of extended praise and worship led by the Bethesda Ministry choir.",
          icon: Music
        }
      ]
    },
    {
      name: "March",
      events: [
        {
          date: "MAR 10",
          title: "Bible Study Series",
          description: "Beginning our spring study series on the Book of Acts. Open to all ages.",
          icon: Book
        },
        {
          date: "MAR 28",
          title: "Youth Leadership",
          description: "Training session for current and aspiring youth leaders in the ministry.",
          icon: User
        }
      ]
    }
  ]
};

export default function CalendarPage() {
  return (
    <>
      <main>
        <Navbar />
        <section className={styles.calendarSection}>
          <div className={styles.calendarContainer}>
            <div className={styles.calendarHeader}>
              <h1>{calendarData.year}</h1>
              <p>{calendarData.subtitle}</p>
            </div>

            {calendarData.months.map((month, monthIndex) => (
              <div key={monthIndex} className={styles.monthSection}>
                <h2 className={styles.monthTitle}>{month.name}</h2>
                <div className={styles.eventsGrid}>
                  {month.events.map((event, eventIndex) => (
                    <EventCard
                      key={eventIndex}
                      date={event.date}
                      title={event.title}
                      description={event.description}
                      icon={event.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
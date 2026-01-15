import React from "react";
import styles from "./imagecard.module.css";


export default function ImageCard({title, image }) {
  return (
    <div className={styles.card}>
      <div 
        className={styles.cardBackground} 
        style={{ backgroundImage: image ? `url(${image})` : 'none' }}
      >
        <div className={styles.imageOverlay}></div>
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
}
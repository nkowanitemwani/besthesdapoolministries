import React from "react";
import styles from "./imagecard.module.css";
import { ChevronRight } from "lucide-react";


export default function ImageCard({ icon: Icon, title, image }) {
  return (
    <div className={styles.card}>
      <div 
        className={styles.cardBackground} 
        style={{ backgroundImage: image ? `url(${image})` : 'none' }}
      >
        <div className={styles.imageOverlay}></div>
      </div>
      
      {Icon && (
        <div className={styles.iconWrapper}>
          <div className={styles.icon}>
            <Icon size={40} />
          </div>
        </div>
      )}

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.exploreButton}>
          <span>Explore Services</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
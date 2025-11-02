import styles from "./quotecard.module.css"

export default function QuoteCard({icon: Icon,title,subtitle}) {
    return(
        <div className={styles.qouteCard}>
        {Icon && (
            <div className={styles.iconWrapper}>
                <Icon className={styles.icon} size={24} strokeWidth={1.5}></Icon>
            </div>
        )}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    );
}
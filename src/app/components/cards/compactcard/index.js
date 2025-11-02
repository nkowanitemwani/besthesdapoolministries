import styles from "./compactcard.module.css"

export default function CompactCard({icon: Icon,title,subtitle}) {
    return(
        <div className={styles.compactCard}>
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
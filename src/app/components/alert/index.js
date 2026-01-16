import React,{useEffect} from "react";
import styles from "./alert.module.css";
import Button from "../button";

export default function Alert({
    icon:Icon,
    message,
    onclose,
    type = "info",
    autoClose = false,
    autoCloseDelay = 5000
}){

    useEffect(() => {
        if (autoClose && onclose) {
            const timer = setTimeout(onclose, autoCloseDelay);
            return () => clearTimeout(timer);
        }
    }, [autoClose, autoCloseDelay, onclose]);


    useEffect(()=>{
        const handleEscape = (e) => {
            if (e.key === 'Escape' && onclose) {
                onclose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape)
    },[onclose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return(
        <div
            className={styles.overlay}
            onClick={onclose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="alert-message"
        >
            <div className={styles.main} onClick={(e) => e.stopPropagation()}>
                <div className={`${styles.container} ${styles[type] || ''}`}>
                    {Icon && (
                        <div className={styles.iconWrapper}>
                            <Icon className={styles.icon} size={32} strokeWidth={1.5} />
                        </div>
                    )}
                    <h2 id="alert-message">{message}</h2>
                    <Button
                        onClick={onclose}
                        style = {{
                            padding: "0.75rem 1.5rem", 
                            backgroundColor: "#1a2332",
                            minWidth: "120px" 
                        }}>Close</Button>
                </div>
            </div>

        </div>
    );

}
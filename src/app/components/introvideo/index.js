import styles from "./introvideo.module.css"

export default function IntroVideo(){
    return (
        <div className={styles.videoWrapper}>
            <video
            className={styles.video}
            controls
            autoPlay
            muted
            preload="auto">
                <source src="/videos/introvideo.mp4" type="video/mp4"></source>
                Your browser does not support the video tag
            </video>

        </div>
    )
}
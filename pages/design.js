import styles from '../styles/Home.module.css'

/* Design page */
export default function About() {
    return (

        <div className={styles.container}>

            <div className={styles.card}>
                <img src="/sweep-new.png" />
                <p>Home Page Design for Startup Sweep </p>
            </div>
            <div className={styles.card}>
                <img src="/SFD-showrooms-map.png" />
                <p>Map Navigation for Stockholm Fashion District App</p>
            </div>
            <div className={styles.card}>
                <video src="/SFD-map-route.mp4" controls></video>
                <p>Map Route Video Made for the Visitors of SFD</p>
            </div>
            
        </div>
    )
}
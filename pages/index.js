import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <div className={styles.container}>


      <div className={styles.grid}>
        <a href="https://meditationmusic.netlify.app/" target="_blank" className={styles.card}>
          <img src="/meditation.gif"></img>
          <p>Train Delay Tracking and Meditation App</p>
        </a>
        <a
          href="https://obtrax-app.vercel.app/" target="_blank" className={styles.card}>
          <img src="/slideshow.gif"></img>
          <p>Women-in-Delivery Contraction Monitor App</p>
        </a>

      </div>
      <a
        href="https://obtrax.net/" target="_blank" className={styles.card} >
        <img src="/Obstetrics-Forecast.gif"></img>
        <p> Obtrax Midwife Dashboard Data Visualization</p>
      </a>
      <a
        href="https://rainyreed.eu.pythonanywhere.com/" target="_blank" className={styles.card} >
        <img src="/web-store.gif"></img>
        <p> Python Sqlite Second-hand Furniture Web Store</p>
      </a>
      <div className={styles.card}>
        <img src="/school-intranet.gif"></img>
        <p>Reykjavik Web Development School Intranet</p>
      </div>
      <div className={styles.card}>
        <video src="/gallery.mp4" controls></video>
        <p>Students Works 3D Gallery for School Intranet</p>
      </div>
      <a
        href="https://editor.p5js.org/rainnie/present/pq19a97cy" target="_blank" className={styles.card} >
        <img src="/quarantine-portait.gif"></img>
        <p>Birds Flying Out of Cage --Sprite Animation</p>
      </a>

      <div className={styles.card}>
        <img src="/football-detection.gif"></img>
        <p>
          Football Players and Ball Detection with AI Solution
            </p>
      </div>

    </div>
  )
}

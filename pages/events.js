import EventCarousel from "../components/EventCarousel";
import styles from "../styles/Events.module.scss";
export default function Events() {
  return (
    <div className={styles.container}>
    <div className={styles.blurBg}></div>
    <div className={styles.outercontainer}>
      <div className={styles.innercontainer}>
        <EventCarousel />
      </div>
    </div>
    <div className={styles.blurBg2}></div>
    </div>
  );
}

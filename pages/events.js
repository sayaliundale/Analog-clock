import EventCarousel from "../components/EventCarousel";
import styles from "../styles/Events.module.scss";
export default function Events() {
  return (
    <div className={styles.outercontainer}>
      <div className={styles.innercontainer}>
        <EventCarousel />
      </div>
    </div>
  );
}

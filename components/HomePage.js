import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.blurBg}></div>
      <div className={styles.container1}>
        <h1 className={styles.title}>BE INNOVATIVE</h1>
        <h1 className={styles.title}>BE DIFFERENT</h1>
        <h2 className={styles.subtitle}>Advancing Through Technology</h2>
      </div>
      <div className={styles.blurBg2}></div>
      
      <div className={styles.container3}>
      <h3 className={styles.heading}>Upcoming Events</h3>

      <div className={styles.container2}>
      <div className={styles.eventsCard}>
        <img className={styles.img1}src="/UpcomingEvents/TheBroCode.png"></img>
        <div className={styles.contentbox}>
        <ul className={styles.eventsList}>
          <li className={styles.eventItem}>
            <div className={styles.eventDetails}>
              <h4 className={styles.eventName}></h4>
              <p className={styles.eventVenue}>Venue : Lab no.<span className={styles.span}> 516, 517</span>  </p>
              <a
                href="https://technovate.pccoer.org/"
                className={styles.eventRegistration}
              >
                Register here
              </a>
            </div>
          </li>
        </ul>
        </div>
      </div>

      </div>
    </div>
    </div>
  );
}

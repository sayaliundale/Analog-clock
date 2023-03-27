import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
    
    <div className={styles.container}>
          <img className={styles.homepageChild} alt="" src="/svg/ellipse-32.svg" />
          <img className={styles.ellipseIcon} alt="" src="/svg/ellipse-52.svg" />
          <img className={styles.homepageChild1} alt="" src="/svg/ellipse-42.svg" />
       <div  className={styles.container1}>
          <h1 className={styles.title}>BE INNOVATIVE</h1>
          <h1 className={styles.title}>BE DIFFERENT</h1>
          <h2 className={styles.subtitle}>Advancing Through Technology</h2>
       </div>
        <img className={styles.homepageItem} alt="" src="/svg/ellipse-22.svg" />
        <img className={styles.homepageInner} alt="" src="/svg/ellipse-12.svg" />
    </div>
    
    </>
    
  );
}

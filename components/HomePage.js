import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
        <div className={styles.blurBg}></div> 
       <div  className={styles.container1}>
          <h1 className={styles.title}>BE INNOVATIVE</h1>
          <h1 className={styles.title}>BE DIFFERENT</h1>
          <h2 className={styles.subtitle}>Advancing Through Technology</h2>
       </div>
        <div className={styles.blurBg2}></div>
    </div>

    
  );
}

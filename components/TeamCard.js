import styles from "../styles/Team.module.css";
import Image from "next/image";

const TeamCard = (props) => {
  return (
    <div className={styles.card}>
      <Image
        src={`${props.imgpath}`}
        width={200}
        height={60}
        alt="main-logo"
        className={styles.logo}
        priority={true}
      />
      <div className={styles.textbox}>
        <p className={`${styles.text} ${styles.head}`}>{props.name}</p>
        <span>{props.title}</span>
      </div>
    </div>
  );
};

export default TeamCard;

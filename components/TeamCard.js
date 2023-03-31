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
        className={styles.img}
        priority={true}
      />
      <div className={styles.textBox}>
        <p className={`${styles.text} ${styles.head} `}>{props.name}</p>
        <span>{props.title}</span>
        {props.icons && props.icons.length > 0 && (
          <span className={styles.icons}>
            {props.icons.map((icon, index) => (
              <a href={icon.href} key={index} className={styles.icon}>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                  height={icon.height}
                />
              </a>
            ))}
          </span>
        )}
      </div>
    </div>
  );
};

export default TeamCard;


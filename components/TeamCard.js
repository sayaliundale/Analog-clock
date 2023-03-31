import styles from "../styles/Team.module.css";
import Image from "next/image";
import { FaLinkedinIn,FaYoutube,FaInstagram } from 'react-icons/fa';

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
              <ul className={styles.socialLinks}>
                {icon.alt === "Insta" && (
                  <li key={index}>
                    <a href={icon.href}>
                      <FaInstagram className={styles.instagramIcon} />
                    </a>
                  </li>
                )}
                {icon.alt === "linkdin" && (
                  <li key={index}>
                    <a href={icon.href}>
                      <FaLinkedinIn className={styles.linkedinIcon} />
                    </a>
                  </li>
                )}
                 {icon.alt === "Youtube" && (
                  <li key={index}>
                    <a href={icon.href}>
                      <FaYoutube className={styles.YoutubeIcon} />
                    </a>
                  </li>
                )}
              </ul>
            ))}
          </span>
        )}
      </div>
    </div>
  );
};

export default TeamCard;





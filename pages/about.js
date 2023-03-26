import styles from "../styles/About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.aboutpage}>
      {/* <Image
        className={styles.aboutpageChild}
        height={100}
        width={100}
        alt=""
        src="/svg/ellipse-17.svg"
      />
      <Image
        className={styles.aboutpageItem}
        height={100}
        width={100}
        alt=""
        src="/svg/ellipse-37.svg"
      />
      <Image
        className={styles.aboutpageInner}
        height={100}
        width={100}
        alt=""
        src="/svg/ellipse-27.svg"
      />
      <Image
        className={styles.ellipseIcon}
        height={100}
        width={100}
        alt=""
        src="/svg/ellipse-64.svg"
      />
      <Image
        className={styles.aboutpageChild1}
        height={100}
        width={100}
        alt=""
        src="/svg/ellipse-47.svg"
      />
      <Image
        className={styles.aboutpageChild2}
        height={100}
        width={100}
        alt=""
        src="/svg/ellipse-57.svg"
      /> */}
      <div className={styles.container}>
        <h1 className={styles.title}>About ACMxPCCOER</h1>
        <div className={styles.text}>
          <p>
            PCCOER ACM Student Chapter has been founded for the technical
            development of students in the field of computing.The Chapter
            provides a platform for students to showcase their talents.It
            facilitates community and individual growth in the computing
            profession.The Chapter organizes a number of events,seminars,talks,
            and workshops for its members.It aims to promote Computer Science
            Culture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

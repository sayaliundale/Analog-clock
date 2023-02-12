import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import style from "../styles/Logo.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
    <div className={style.logo}>
     <Image src="/acmLogo1.png" width={200} height={68} />
    </div>
      <Link href="/" className={styles.content}>
        Home
      </Link>
      <Link href="/about" className={styles.content}>
        About
      </Link>
      <Link href="/team" className={styles.content}>
        Team
      </Link>
      <Link href="/blog" className={styles.content}>
        Blog
      </Link>
      <Link href="/events" className={styles.content}>
        Events
      </Link>
    </nav>
  );
}

import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <div>
            <Image
              src="/acmLogo.png"
              width={200}
              height={60}
              alt="main-logo"
              className={styles.logo}
              priority={true}
            />
          </div>
        </Link>
        <div className={styles.menu}>
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
        
        </div>
      </nav>
    </header>
  );
}

import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

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
          <Link
            href="/about"
            className={`${styles.content} ${
              router.pathname === "/about"
                ? `${styles.active} ${styles.activeText}`
                : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/team"
            className={`${styles.content} ${
              router.pathname === "/team"
                ? `${styles.active} ${styles.activeText}`
                : ""
            }`}
          >
            Team
          </Link>
          <Link
            href="/blog"
            className={`${styles.content} ${
              router.pathname === "/blog"
                ? `${styles.active} ${styles.activeText}`
                : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/events"
            className={`${styles.content} ${
              router.pathname === "/events"
                ? `${styles.active} ${styles.activeText}`
                : ""
            }`}
          >
            Events
          </Link>
        
        </div>
      </nav>
    </header>
  );
}


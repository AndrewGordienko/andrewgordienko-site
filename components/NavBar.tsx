import Link from "next/link";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.brand}>
        &lt;Andrew /&gt;
      </Link>

      <nav className={styles.navlinks}>
        <Link href="/resume" className={styles.link}>
          RESUME
        </Link>
        <Link href="/contact" className={styles.link}>
          CONTACT
        </Link>
      </nav>
    </header>
  );
}

import NavBar from "components/NavBar";
import styles from "./ResumePage.module.css";

export default function ResumePage() {
  return (
    <div className="container">
      <NavBar />

      <main className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.kicker}>RESUME</div>
          <h1 className={styles.h1}>Andrew Gordienko</h1>

          <div className={styles.actions}>
            <a className={styles.btnPrimary} href="/resume.pdf" target="_blank" rel="noreferrer">
              Open PDF
            </a>
            <a className={styles.btn} href="/resume.pdf" download>
              Download
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}

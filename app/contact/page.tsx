import NavBar from "../../components/NavBar";
import styles from "./ContactPage.module.css";

export default function ContactPage() {
  return (
    <div className="container">
      <NavBar />

      <main className="hero">
        <div className="kicker">CONTACT</div>
        <h1 className="h1">Let’s talk.</h1>
        <p className="sub">
          If you want to talk infrastructure, data products, modernization, or
          simulation work — reach out.
        </p>

        <section className="section">
          <div className={styles.card}>
            <div className={styles.miniTitle}>Direct</div>
            <p className={styles.bodyText}>Email is best. I usually reply fast.</p>

            <div className="buttons" style={{ marginTop: 14 }}>
              <a
                className="btn btnPrimary"
                href="mailto:gordienko.adg@gmail.com"
              >
                Email
              </a>

              <a
                className="btn"
                href="https://www.linkedin.com/in/andrewgordienko/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Andrew Gordienko
        </footer>
      </main>
    </div>
  );
}

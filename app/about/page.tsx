import NavBar from "../../components/NavBar";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  return (
    <div className="container">
      <NavBar />

      <main className="hero">
        <div className="kicker">ABOUT</div>
        <h1 className="h1">About</h1>

        <p className="sub">
          I’m Andrew Gordienko. I’m a University of Toronto student studying
          Computational Cognitive Science, with a minor in Statistics and
          Computer Science.
        </p>

        <section className="section">
          <div className="sectionHeader">
            <div className="sectionTitle">Overview</div>
            <div className="sectionNote">Quick background.</div>
          </div>

          <div className={styles.twoCol}>
            <div className={styles.aboutBlock}>
              <div className={styles.miniTitle}>Education</div>
              <p className={styles.bodyText}>
                University of Toronto — Computational Cognitive Science
                <br />
                Minor: Statistics, Computer Science
              </p>
            </div>

            <div className={styles.aboutBlock}>
              <div className={styles.miniTitle}>Interests</div>
              <p className={styles.bodyText}>
                Infrastructure-style products, simulation systems, applied AI,
                backend engineering, and data tooling.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <div className="sectionTitle">Outside school</div>
            <div className="sectionNote">Non-work context.</div>
          </div>

          <div className={styles.twoCol}>
            <div className={styles.aboutBlock}>
              <div className={styles.miniTitle}>Building</div>
              <p className={styles.bodyText}>
                I build and ship small tools and projects, mostly in Python and
                web.
              </p>
            </div>

            <div className={styles.aboutBlock}>
              <div className={styles.miniTitle}>Rowing</div>
              <p className={styles.bodyText}>
                I train and compete in rowing.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="sectionHeader">
            <div className="sectionTitle">Links</div>
            <div className="sectionNote">More detail.</div>
          </div>

          <div className={styles.aboutBlock}>
            <div className="buttons" style={{ marginTop: 2 }}>
              <a className="btn btnPrimary" href="/projects">
                Projects
              </a>
              <a className="btn" href="/journey">
                Journey
              </a>
              <a className="btn" href="/contact">
                Contact
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

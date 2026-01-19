import Image from "next/image";
import styles from "./LandingHero.module.css";

export default function LandingHero({
  onClickPortfolio,
  onClickJourney,
  onClickAbout,
}: {
  onClickPortfolio?: () => void;
  onClickJourney?: () => void;
  onClickAbout?: () => void;
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGrid}>
        {/* LEFT */}
        <div className={styles.heroLeft}>
          <div className={styles.heroTitleBlock}>
            <div className={styles.kicker}>RESEARCH / SOLUTIONS ENGINEER</div>
            <h1 className={styles.h1}>Hi, I'm Andrew Gordienko 👋</h1>
          </div>

          {/* BLURB (back inside left so desktop is correct) */}
          <p className={`${styles.sub} ${styles.heroSub}`}>
            I build solutions for real-world problems by following the data.
            That means collecting messy inputs, validating them, and turning
            them into systems people use, from infrastructure to applied AI.
          </p>

          {/* BUTTONS */}
          <div className={styles.heroButtons}>
            <div className={styles.buttons}>
              <button
                className={styles.btn}
                type="button"
                onClick={() => onClickPortfolio?.()}
              >
                Portfolio
              </button>

              <button
                className={styles.btn}
                type="button"
                onClick={() => onClickJourney?.()}
              >
                Journey
              </button>

              <button
                className={styles.btn}
                type="button"
                onClick={() => onClickAbout?.()}
              >
                About
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.heroPhotoWrap}>
          <div className={styles.heroPhoto}>
            <Image
              src="/photo.jpeg"
              alt="Andrew Gordienko"
              width={520}
              height={520}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

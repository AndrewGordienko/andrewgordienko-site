"use client";

import NavBar from "../../components/NavBar";
import TimelineCentered from "../../components/journey/TimelineCentered";
import { timeline } from "../../components/journey/timeline";

import styles from "./JourneyPage.module.css";

export default function JourneyPage() {
  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.kicker}>JOURNEY</div>
        <h1 className={styles.h1}>The long arc.</h1>
        <p className={styles.sub}>
          A timeline of the projects that shaped how I build: research first,
          then tooling, then real products.
        </p>

        <TimelineCentered items={timeline} />

        <footer className={styles.footer}>
          <a className={styles.backBtn} href="/">
            Back Home
          </a>
        </footer>
      </main>
    </div>
  );
}

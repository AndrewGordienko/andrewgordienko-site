import Link from "next/link";
import { projects } from "@/app/projects/data";
import styles from "./LandingProjects.module.css";

type PillTone = "companies" | "simulation" | "research";

export default function LandingProjects() {
  const pillToneClass: Record<PillTone, string> = {
    companies: styles.pillCompanies,
    simulation: styles.pillSimulation,
    research: styles.pillResearch,
  };

  return (
    <div className={styles.grid}>
      {projects.map((p) => (
        <Link
          key={p.slug}
          href={`/projects/${p.slug}`}
          className={styles.card}
          scroll={true}
        >
          <div className={styles.cardTop}>
            <div className={styles.cardHead}>
              <div className={styles.cardTitle}>{p.title}</div>
              <div className={styles.cardSub}>{p.subtitle}</div>
              <div className={styles.cardRole}>{p.role}</div>
            </div>

            <div className={`${styles.pill} ${pillToneClass[p.pillTone]}`}>
              {p.pill}
            </div>
          </div>

          <p className={styles.cardDesc}>{p.desc}</p>

          <div className={styles.cardLink}>
            {p.comingSoon ? "Coming soon →" : "View →"}
          </div>
        </Link>
      ))}
    </div>
  );
}

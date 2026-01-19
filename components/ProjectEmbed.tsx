import styles from "./ProjectEmbed.module.css";
import { useMemo } from "react";

export default function ProjectEmbed({
  src,
  title,
}: {
  src: string;
  title?: string;
}) {
  const isPdf = src.toLowerCase().includes(".pdf");

  const iframeSrc = useMemo(() => {
    if (!isPdf) return src;

    const base = src.split("#")[0];

    return `${base}#toolbar=0&navpanes=0&scrollbar=1`;
  }, [src, isPdf]);

  return (
    <div className={styles.embedFrame}>
      <div className={styles.embedTopBar}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
      </div>

      <div className={styles.embedViewport}>
        <iframe
          className={isPdf ? styles.embedPdf : styles.embedSite}
          src={iframeSrc}
          title={title ?? (isPdf ? "PDF preview" : "Project preview")}
          loading="lazy"
          scrolling="auto"
        />
      </div>
    </div>
  );
}

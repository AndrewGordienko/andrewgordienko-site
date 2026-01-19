import Link from "next/link";
import { notFound } from "next/navigation";

import NavBar from "@/components/NavBar";
import ProjectEmbed from "@/components/ProjectEmbed";
import { getProject } from "../data";

import styles from "./ProjectPage.module.css";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);
  if (!project) return notFound();

  const externalWebsite =
    project.href && project.href.startsWith("http") ? project.href : null;

  const websiteLabel = externalWebsite
    ? externalWebsite.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  const isPdf = project.embedUrl
    ? project.embedUrl.toLowerCase().endsWith(".pdf")
    : false;

  const pdfHref = isPdf ? project.embedUrl! : null;

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.shell}>
          <div className={styles.top}>
            <Link href="/" className={styles.backLink}>
              ← Back
            </Link>
          </div>

          <header className={styles.header}>
            <div className={styles.headerTop}>
              <h1 className={styles.title}>{project.title}</h1>

              <div
                className={`${styles.pill} ${pillToneClass(
                  project.pillTone,
                  styles
                )}`}
              >
                {project.pill}
              </div>
            </div>

            <div className={styles.metaRow}>
              <span className={styles.subtitle}>{project.subtitle}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.role}>{project.role}</span>
            </div>

            {externalWebsite ? (
              <div className={styles.websiteRow}>
                <span className={styles.websiteLabel}>Website</span>
                <a
                  className={styles.websiteLink}
                  href={externalWebsite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {websiteLabel} →
                </a>
              </div>
            ) : null}

            <p className={styles.dek}>{project.desc}</p>

            {/* =========================
               PDF buttons (Resume-style)
               ========================= */}
            {pdfHref ? (
              <div className={styles.pdfActions}>
                <a
                  className={styles.btnPrimary}
                  href={pdfHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF
                </a>

                <a className={styles.btn} href={pdfHref} download>
                  Download
                </a>
              </div>
            ) : null}

            {/* Optional: keep embed for non-PDFs OR if you still want a preview */}
            {project.embedUrl && !isPdf ? (
  <div className={styles.embedRow}>
    <ProjectEmbed
      src={project.embedUrl}
      title={`${project.title} preview`}
    />
  </div>
) : null}

          </header>

          <article className={styles.article}>
            <RichText content={project.longDesc} styles={styles} />

            <div className={styles.ctas}>
              {!project.comingSoon && project.href !== "#" ? (
                <a
                  className={styles.primaryCta}
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  Open →
                </a>
              ) : (
                <div className={styles.muted}>Coming soon →</div>
              )}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

/**
 * Lightweight markdown-ish renderer.
 * Supports:
 * - "## Heading" -> <h2>
 * - "- bullet" -> <ul><li>
 * - blank lines -> paragraph separation
 */
function RichText({
  content,
  styles,
}: {
  content: string;
  styles: {
    h2: string;
    p: string;
    ul: string;
  };
}) {
  const lines = content.split("\n");

  const blocks: Array<
    | { type: "h2"; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
  > = [];

  let paragraphBuffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = () => {
    const text = paragraphBuffer.join(" ").trim();
    if (text) blocks.push({ type: "p", text });
    paragraphBuffer = [];
  };

  const flushList = () => {
    if (listBuffer.length) blocks.push({ type: "ul", items: listBuffer });
    listBuffer = [];
  };

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) {
      flushList();
      flushParagraph();
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      flushParagraph();
      blocks.push({ type: "h2", text: line.replace(/^##\s+/, "").trim() });
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listBuffer.push(line.replace(/^- /, "").trim());
      continue;
    }

    flushList();
    paragraphBuffer.push(line);
  }

  flushList();
  flushParagraph();

  return (
    <>
      {blocks.map((b, idx) => {
        if (b.type === "h2") {
          return (
            <h2 key={idx} className={styles.h2}>
              {b.text}
            </h2>
          );
        }

        if (b.type === "ul") {
          return (
            <ul key={idx} className={styles.ul}>
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={idx} className={styles.p}>
            {b.text}
          </p>
        );
      })}
    </>
  );
}

function pillToneClass(
  tone: "companies" | "simulation" | "research",
  styles: {
    pillCompanies: string;
    pillSimulation: string;
    pillResearch: string;
  }
) {
  if (tone === "companies") return styles.pillCompanies;
  if (tone === "simulation") return styles.pillSimulation;
  return styles.pillResearch;
}

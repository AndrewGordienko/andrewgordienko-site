import type { TimelineItem, TimelineStage } from "./timeline";
import styles from "./TimelineCentered.module.css";

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className={styles.tCard}>
      <div className={styles.tYear}>{item.year}</div>
      <div className={styles.tTitle}>{item.title}</div>
      {item.subtitle ? <div className={styles.tSub}>{item.subtitle}</div> : null}

      <p className={styles.tBody}>{item.body}</p>

      {item.tags?.length ? (
        <div className={styles.tTags}>
          {item.tags.map((t) => (
            <span key={t} className={styles.tTag}>
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {item.links?.length ? (
        <div className={styles.tLinks}>
          {item.links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.href}
                className={styles.tLink}
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
              >
                {l.label} →
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function stageLabel(stage?: TimelineStage) {
  if (stage === "learning") return "RESEARCH";
  if (stage === "tools") return "TOOLING";
  if (stage === "companies") return "REAL SYSTEMS";
  return "";
}

function stageGroupClass(stage?: TimelineStage) {
  if (stage === "learning") return styles.stageLearning;
  if (stage === "tools") return styles.stageTools;
  if (stage === "companies") return styles.stageCompanies;
  return styles.stageDefault;
}

export default function TimelineCentered({ items }: { items: TimelineItem[] }) {
  // group contiguous items by stage so we can draw big tinted panels like your screenshots
  const groups: Array<{ stage?: TimelineStage; items: TimelineItem[] }> = [];
  for (const it of items) {
    const last = groups[groups.length - 1];
    if (!last || last.stage !== it.stage) groups.push({ stage: it.stage, items: [it] });
    else last.items.push(it);
  }

  return (
    <section className={styles.timelineCentered}>
      {groups.map((g, gi) => (
        <div key={`${g.stage ?? "stage"}-${gi}`} className={`${styles.stageGroup} ${stageGroupClass(g.stage)}`}>
          <div className={styles.tStageInline}>
            <div className={styles.tStageInlineText}>{stageLabel(g.stage)}</div>
          </div>

          {g.items.map((item, idx) => {
            const globalIndex =
              groups.slice(0, gi).reduce((acc, gg) => acc + gg.items.length, 0) + idx;

            const side = globalIndex % 2 === 0 ? "left" : "right";

            return (
              <div key={`${item.year}-${item.title}`} className={styles.tRowCentered}>
                <div
                  className={`${styles.tSide} ${styles.tSideLeft} ${
                    side === "left" ? styles.show : ""
                  }`}
                >
                  {side === "left" ? <TimelineCard item={item} /> : null}
                </div>

                <div className={styles.tMiddle}>
                  <div className={styles.tDot} />
                  {!(gi === groups.length - 1 && idx === g.items.length - 1) ? (
                    <div className={styles.tLine} />
                  ) : null}
                </div>

                <div
                  className={`${styles.tSide} ${styles.tSideRight} ${
                    side === "right" ? styles.show : ""
                  }`}
                >
                  {side === "right" ? <TimelineCard item={item} /> : null}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}

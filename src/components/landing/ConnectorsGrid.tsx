type Card = {
  icon: string;
  meta: string;
  title: string;
  desc: string;
};

const CARDS: Card[] = [
  { icon: "G", meta: "01 / MAIL",  title: "Gmail & Outlook",    desc: "Summarize threads, draft replies, find the one email from last Thursday." },
  { icon: "D", meta: "02 / DOCS",  title: "Google Drive",       desc: "Search across docs, sheets and slides, then quote the right line." },
  { icon: "C", meta: "03 / TIME",  title: "Calendar",           desc: "Prep for every meeting. Book the next one without leaving chat." },
  { icon: "N", meta: "04 / KB",    title: "Notion",             desc: "Pull project briefs into context, push meeting notes straight back." },
  { icon: "S", meta: "05 / DATA",  title: "Supabase MCP",       desc: "Query your own database in natural language, safely and scoped." },
  { icon: "+", meta: "06 / OPEN",  title: "Any MCP server",     desc: "Self-host or point at a public endpoint. Auth headers supported." },
];

export default function ConnectorsGrid() {
  return (
    <section
      id="connectors"
      style={{ padding: "120px 32px", maxWidth: 1200, margin: "0 auto" }}
    >
      <span className="eyebrow">/ Ecosystem</span>
      <h2
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 600,
          fontSize: "clamp(32px, 3.8vw, 48px)",
          margin: "0 0 14px",
          letterSpacing: "-0.03em",
          maxWidth: 720,
        }}
      >
        A connector for every corner of{" "}
        <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--accent)" }}>
          your workflow.
        </em>
      </h2>
      <p
        style={{
          color: "var(--ink-2)",
          fontSize: 17,
          maxWidth: 560,
          lineHeight: 1.6,
          marginBottom: 60,
        }}
      >
        First-party integrations for the apps you already use — and the open MCP protocol for everything else.
      </p>

      <div
        className="card-grid-responsive"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          background: "var(--line)",
          border: "1px solid var(--line)",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >
        {CARDS.map((card) => (
          <div
            key={card.meta}
            className="connector-card"
            style={{
              padding: 32,
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "var(--bg-3)",
                  border: "1px solid var(--line-2)",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "var(--accent)",
                  letterSpacing: "-0.03em",
                }}
              >
                {card.icon}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  color: "var(--ink-3)",
                  letterSpacing: "0.1em",
                }}
              >
                {card.meta}
              </div>
            </div>
            <div>
              <h4 style={{ margin: "0 0 8px", fontSize: 19, fontWeight: 500, letterSpacing: "-0.01em" }}>
                {card.title}
              </h4>
              <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 14, lineHeight: 1.55 }}>
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

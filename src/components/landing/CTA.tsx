export default function CTA() {
  return (
    <section
      style={{
        padding: "140px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bottom radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(255,55,95,0.28), transparent 70%)",
          zIndex: -1,
        }}
      />

      <h2
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(48px, 7vw, 92px)",
          lineHeight: 1,
          margin: "0 0 24px",
          letterSpacing: "-0.04em",
        }}
      >
        Your phone,{" "}
        <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--accent)" }}>
          finally agentic.
        </em>
      </h2>

      <p
        style={{
          maxWidth: 520,
          margin: "0 auto 40px",
          color: "var(--ink-2)",
          fontSize: 17,
          lineHeight: 1.6,
        }}
      >
        Stop juggling five chat apps. MCPy talks to every model, works with every tool, and ships today.
      </p>

      <div style={{ display: "flex", gap: 12, justifyContent: "center", alignItems: "center" }}>
        <a className="btn btn-primary" href="https://apps.apple.com/us/app/mcpy/id6760366135">
          Download on App Store <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}

export default function RoutesBand() {
  return (
    <section
      style={{
        padding: "40px 32px 20px",
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: 12,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--ink-3)",
          marginBottom: 20,
          fontFamily: "var(--font-jetbrains), monospace",
        }}
      >
        Routes to the models you already know
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 40,
          opacity: 0.55,
        }}
      >
        {["Anthropic", "OpenAI", "Google", "xAI", "Meta", "Mistral", "DeepSeek"].map((name) => (
          <div
            key={name}
            style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--ink-2)" }}
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
}

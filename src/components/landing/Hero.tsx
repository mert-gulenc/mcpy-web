export default function Hero() {
  return (
    <header className="hero-section">
      {/* Background glow */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Pill badge */}
      <div className="hero-pill">
        <span
          className="pulse-dot"
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "oklch(0.7 0.18 150)",
            boxShadow: "0 0 10px oklch(0.7 0.18 150 / 0.8)",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        Now Available on iOS
      </div>

      {/* H1 */}
      <h1 className="hero-h1">
        One chat, every model,
        <br />
        <em className="hero-h1-em">all your tools.</em>
      </h1>

      {/* Sub copy */}
      <p className="hero-sub">
        MCPy is a universal AI client for your phone. Talk to Claude, GPT, Gemini and more — and let them reach into your inbox, calendar, Notion and any MCP server you trust.
      </p>

      {/* CTAs */}
      <div className="hero-ctas">
        <a className="btn btn-primary" href="https://apps.apple.com/us/app/mcpy/id6760366135">
          Download for iOS <span className="arrow">→</span>
        </a>
        <a className="btn" href="#features">
          How it works
        </a>
      </div>

      {/* Meta row */}
      <div className="hero-meta">
        <span><span className="hero-tick">✓</span> End-to-end routed</span>
        <span><span className="hero-tick">✓</span> Private by default</span>
        <span><span className="hero-tick">✓</span> Open MCP protocol</span>
      </div>

      {/* Phone fan */}
      <div className="hero-phones" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/landing/phone-4.png" alt="" className="hero-phone hero-phone-1" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/landing/phone-2.png" alt="" className="hero-phone hero-phone-2" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/landing/phone-1.png" alt="" className="hero-phone hero-phone-3" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/landing/phone-3.png" alt="" className="hero-phone hero-phone-4" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/landing/phone-5.png" alt="" className="hero-phone hero-phone-5" />
      </div>
    </header>
  );
}

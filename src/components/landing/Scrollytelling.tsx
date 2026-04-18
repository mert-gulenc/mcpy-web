"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Feature = {
  num: string;
  scene: string;
  kicker: string;
  titleBefore: string;
  em: string;
  body: string;
  tags?: string[];
  bullets?: string[];
};

const FEATURES: Feature[] = [
  {
    num: "01 / 05",
    scene: "Home",
    kicker: "One place to start",
    titleBefore: "Pick a model,",
    em: "or let Auto decide.",
    body: "Your favorite frontier models live side by side. Start typing and MCPy's router picks the right one — or tap a specific brain when you know what you want.",
    tags: ["Auto routing", "9+ models", "Smart fallbacks"],
  },
  {
    num: "02 / 05",
    scene: "Compose",
    kicker: "Ask anything",
    titleBefore: "One prompt,",
    em: "all your context.",
    body: "Summarize emails, pull meeting notes, draft a todo — MCPy fans out to the right tools and models behind the scenes, then returns one clean answer.",
    bullets: [
      "Streams from multiple sources in parallel",
      "Voice, keyboard and share-sheet input",
      "Remembers recent context across chats",
    ],
  },
  {
    num: "03 / 05",
    scene: "Rich replies",
    kicker: "Beyond text",
    titleBefore: "Text, images, code —",
    em: "all in one thread.",
    body: "Generate a hero image with Gemini, a spec with Claude and ship-ready code with GPT. Swap models mid-conversation without losing the thread.",
    tags: ["Image gen", "Code blocks", "File uploads", "Rerun in another model"],
  },
  {
    num: "04 / 05",
    scene: "Connectors",
    kicker: "Your apps, connected",
    titleBefore: "Plug in the tools",
    em: "you already use.",
    body: "One-tap connectors for Gmail, Drive, Calendar, Notion and more. Toggle them on or off per chat so the model only sees what it needs.",
    bullets: [
      "OAuth handled in-app, tokens stored on-device",
      "Granular per-chat permissions",
      "Revoke any connector with one tap",
    ],
  },
  {
    num: "05 / 05",
    scene: "MCP Servers",
    kicker: "Bring your own tools",
    titleBefore: "Add any MCP server.",
    em: "Yes, any.",
    body: "MCPy speaks the open Model Context Protocol. Paste a URL, add an auth header if you need one, and the model gets new capabilities instantly — no app update required.",
    tags: ["Open protocol", "Self-hosted ok", "Per-server toggles"],
  },
];

const PHONES = [
  { src: "/landing/phone-1.png", alt: "MCPy home screen with model picker" },
  { src: "/landing/phone-2.png", alt: "Composing a prompt in MCPy" },
  { src: "/landing/phone-3.png", alt: "Gemini image generation in MCPy" },
  { src: "/landing/phone-4.png", alt: "MCPy connectors screen" },
  { src: "/landing/phone-5.png", alt: "Adding a custom MCP server" },
];

export default function Scrollytelling() {
  const [active, setActive] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const features = featureRefs.current.filter(Boolean) as HTMLDivElement[];
    let current = -1;

    function activate(i: number) {
      if (i === current) return;
      current = i;
      setActive(i);
    }

    const io = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        let bestDist = Infinity;
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const rect = e.boundingClientRect;
          const center = rect.top + rect.height / 2;
          const dist = Math.abs(center - window.innerHeight / 2);
          if (dist < bestDist) {
            bestDist = dist;
            best = e;
          }
        });
        if (best) {
          const idx = parseInt((best as IntersectionObserverEntry & { target: HTMLElement }).target.dataset.feature ?? "0", 10);
          activate(idx);
        }
      },
      { threshold: [0.3, 0.5, 0.7], rootMargin: "-20% 0px -20% 0px" }
    );

    features.forEach((f) => io.observe(f));

    const onScroll = () => {
      const center = window.innerHeight / 2;
      let closest = 0;
      let closestDist = Infinity;
      features.forEach((f, i) => {
        const r = f.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - center);
        if (d < closestDist) {
          closestDist = d;
          closest = i;
        }
      });
      activate(closest);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    activate(0);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="features"
      style={{ position: "relative", marginTop: 80, padding: "80px 0 120px" }}
    >
      {/* Section header */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto 60px",
          padding: "0 32px",
          textAlign: "center",
        }}
      >
        <span className="eyebrow">/ How it works</span>
        <h2
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            letterSpacing: "-0.035em",
            fontSize: "clamp(36px, 4.5vw, 60px)",
            lineHeight: 1.05,
            margin: "0 0 14px",
          }}
        >
          Scroll through a day with MCPy.
        </h2>
        <p
          style={{
            maxWidth: 560,
            margin: "0 auto",
            color: "var(--ink-2)",
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          From picking a model to plugging in your own tools — here&apos;s how MCPy fits into the rhythm of your day.
        </p>
      </div>

      {/* Track: sticky left + scrolling right */}
      <div
        className="scrolly-grid"
        style={{
          position: "relative",
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
        }}
      >
        {/* LEFT: sticky stage — hidden on mobile, replaced by per-panel phones */}
        <div
          className="stage-sticky scrolly-stage-desktop"
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
          }}
        >
          <div
            className="stage-inner-size"
            style={{ position: "relative", width: 320, height: 640 }}
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: -40,
                borderRadius: "50%",
                background: "radial-gradient(circle, var(--accent-soft), transparent 60%)",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            />

            {/* Rail */}
            <div
              className="rail-hide"
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 42,
                top: "50%",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                zIndex: 2,
              }}
            >
              {FEATURES.map((_, i) => (
                <div
                  key={i}
                  className={`rail-dot${i === active ? " active" : i < active ? " passed" : ""}`}
                />
              ))}
            </div>

            {/* Phone layers */}
            {PHONES.map((phone, i) => (
              <div
                key={i}
                className={`phone-layer${i === active ? " active" : ""}`}
                style={{ zIndex: 1 }}
              >
                <Image
                  src={phone.src}
                  alt={phone.alt}
                  width={320}
                  height={640}
                  style={{ width: "100%", height: "auto", filter: "drop-shadow(0 50px 80px rgba(0,0,0,0.7))" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: feature panels */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              ref={(el) => { featureRefs.current[i] = el; }}
              data-feature={i}
              className="feature-panel"
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "60px 60px 60px 20px",
                maxWidth: 560,
              }}
            >
              {/* Phone shown only on mobile (desktop uses sticky stage) */}
              <div className="feature-phone-mobile">
                <Image
                  src={PHONES[i].src}
                  alt={PHONES[i].alt}
                  width={240}
                  height={480}
                  style={{ width: 200, height: "auto", filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.6))" }}
                />
              </div>

              {/* Step indicator */}
              <div
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 12,
                  color: "var(--ink-3)",
                  letterSpacing: "0.18em",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                {feature.num} &nbsp;·&nbsp; {feature.scene}
                <span style={{ flex: 1, height: 1, background: "var(--line)", maxWidth: 60 }} />
              </div>

              {/* Kicker */}
              <div
                style={{
                  color: "var(--accent)",
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {feature.kicker}
              </div>

              {/* H3 */}
              <h3
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  fontSize: "clamp(32px, 3.6vw, 48px)",
                  lineHeight: 1.05,
                  margin: "0 0 20px",
                }}
              >
                {feature.titleBefore}{" "}
                <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--accent)" }}>
                  {feature.em}
                </em>
              </h3>

              {/* Body */}
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "var(--ink-2)",
                  margin: "0 0 28px",
                  maxWidth: 460,
                }}
              >
                {feature.body}
              </p>

              {/* Tags */}
              {feature.tags && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                  {feature.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 12px",
                        borderRadius: 999,
                        fontSize: 13,
                        border: "1px solid var(--line-2)",
                        background: "rgba(255,255,255,0.02)",
                        color: "var(--ink-2)",
                      }}
                    >
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Bullets */}
              {feature.bullets && (
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {feature.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, color: "var(--ink-2)", lineHeight: 1.5 }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 22,
                          height: 22,
                          borderRadius: 6,
                          background: "var(--accent-soft)",
                          display: "grid",
                          placeItems: "center",
                          color: "var(--accent)",
                          marginTop: 1,
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

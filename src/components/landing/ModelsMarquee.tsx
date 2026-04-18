import Image from "next/image";

type Chip = {
  src: string;
  alt: string;
  name: string;
  variant: "on-white" | "on-dark";
};

const CHIPS: Chip[] = [
  { src: "/landing/providers/claude.svg",    alt: "Claude",    name: "Claude",    variant: "on-dark"  },
  { src: "/landing/providers/openai.svg",    alt: "OpenAI",    name: "GPT",       variant: "on-white" },
  { src: "/landing/providers/gemini.svg",    alt: "Gemini",    name: "Gemini",    variant: "on-dark"  },
  { src: "/landing/providers/grok.svg",      alt: "Grok",      name: "Grok",      variant: "on-white" },
  { src: "/landing/providers/xai.svg",       alt: "xAI",       name: "xAI",       variant: "on-white" },
  { src: "/landing/providers/meta.svg",      alt: "Meta",      name: "Llama",     variant: "on-dark"  },
  { src: "/landing/providers/deepseek.svg",  alt: "DeepSeek",  name: "DeepSeek",  variant: "on-dark"  },
  { src: "/landing/providers/mistral.svg",   alt: "Mistral",   name: "Mistral",   variant: "on-dark"  },
  { src: "/landing/providers/moonshot.svg",  alt: "Moonshot",  name: "Kimi",      variant: "on-white" },
  { src: "/landing/providers/zai.svg",       alt: "Z.ai",      name: "Z.ai",      variant: "on-white" },
  { src: "/landing/providers/arcee.svg",     alt: "Arcee",     name: "Arcee",     variant: "on-dark"  },
  { src: "/landing/providers/anthropic.svg", alt: "Anthropic", name: "Anthropic", variant: "on-white" },
];

function ChipItem({ chip }: { chip: Chip }) {
  const sqStyle =
    chip.variant === "on-white"
      ? { background: "#fff", color: "#000" }
      : { background: "#17171a", color: "#fff", border: "1px solid rgba(255,255,255,0.08)" };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 20px",
        borderRadius: 999,
        border: "1px solid var(--line-2)",
        background: "var(--bg-2)",
        fontSize: 15,
        fontWeight: 500,
        whiteSpace: "nowrap",
        color: "var(--ink)",
      }}
    >
      <span
        style={{
          width: 24,
          height: 24,
          borderRadius: 7,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
          overflow: "hidden",
          ...sqStyle,
        }}
      >
        <Image src={chip.src} alt={chip.alt} width={20} height={20} style={{ width: 20, height: 20, display: "block" }} />
      </span>
      {chip.name}
    </span>
  );
}

export default function ModelsMarquee() {
  return (
    <section
      id="models"
      style={{
        padding: "100px 32px",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.015), transparent)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: 900, margin: "0 auto 48px", textAlign: "center" }}>
        <span className="eyebrow">/ Models</span>
        <h2
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 600,
            fontSize: "clamp(32px, 3.6vw, 48px)",
            margin: "0 0 14px",
            letterSpacing: "-0.03em",
          }}
        >
          Every frontier model.{" "}
          <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--accent)" }}>
            One subscription.
          </em>
        </h2>
        <p style={{ color: "var(--ink-2)", margin: 0, fontSize: 16, lineHeight: 1.6 }}>
          One plan, one login — every frontier model included. Rate-limits, pricing and capabilities are normalized so you can focus on the answer, not the billing.
        </p>
      </div>

      {/* Marquee */}
      <div
        style={{
          overflow: "hidden",
          maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div className="marquee-track">
          {/* Duplicated for seamless loop */}
          {[...CHIPS, ...CHIPS].map((chip, i) => (
            <ChipItem key={i} chip={chip} />
          ))}
        </div>
      </div>
    </section>
  );
}

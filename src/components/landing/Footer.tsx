export default function Footer() {
  return (
    <>
      <footer
        className="footer-grid"
        style={{
          borderTop: "1px solid var(--line)",
          padding: "60px 32px 40px",
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 40,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              fontSize: 17,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "#FF375F url('/landing/mcpy-logo.png') center/cover no-repeat",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.06), 0 4px 14px rgba(255,55,95,0.35)",
                flexShrink: 0,
              }}
            />
            <span>MCPy</span>
          </div>
          <p
            style={{
              color: "var(--ink-3)",
              fontSize: 13,
              margin: "12px 0 8px",
              maxWidth: 300,
              lineHeight: 1.55,
            }}
          >
            The universal AI client for your phone. Built on the open Model Context Protocol.
          </p>
          <a
            href="mailto:support@usemcpy.com"
            className="link-hover"
            style={{
              fontSize: 13,
              fontFamily: "var(--font-jetbrains), monospace",
            }}
          >
            support@usemcpy.com
          </a>
        </div>

        {/* Product */}
        <FooterCol
          title="Product"
          links={[
            { label: "Features", href: "#features" },
            { label: "Models",   href: "#models"   },
          ]}
        />

        {/* Company */}
        <FooterCol
          title="Company"
          links={[
            { label: "About",            href: "#"                          },
            { label: "Privacy Policy",   href: "/privacy"                   },
            { label: "Terms of Service", href: "/terms"                     },
            { label: "Contact",          href: "mailto:support@usemcpy.com" },
          ]}
        />
      </footer>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          padding: "20px 32px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "var(--ink-3)",
          fontFamily: "var(--font-jetbrains), monospace",
          borderTop: "1px solid var(--line)",
        }}
      >
        <span>© MCPy 2026</span>
        <span>Now Available</span>
      </div>
    </>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h5
        style={{
          fontSize: 12,
          color: "var(--ink-3)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          margin: "0 0 16px",
          fontFamily: "var(--font-jetbrains), monospace",
          fontWeight: 500,
        }}
      >
        {title}
      </h5>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="link-hover" style={{ fontSize: 14 }}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

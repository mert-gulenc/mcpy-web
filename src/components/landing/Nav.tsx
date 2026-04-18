export default function Nav() {
  return (
    <nav className="nav-bar">
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 600, letterSpacing: "-0.02em", fontSize: 17, flexShrink: 0 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "#FF375F url('/landing/mcpy-logo.png') center/cover no-repeat",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 4px 14px rgba(255,55,95,0.35)",
            flexShrink: 0,
          }}
        />
        <span>MCPy</span>
      </div>

      {/* Center links */}
      <div className="nav-links-hide" style={{ gap: 28, fontSize: 14 }}>
        <a href="#features" className="link-hover">Features</a>
        <a href="#models" className="link-hover">Models</a>
        <a href="#connectors" className="link-hover">Connectors</a>
      </div>

      {/* CTA */}
      <div style={{ flexShrink: 0 }}>
        <a className="btn btn-primary" href="https://apps.apple.com/us/app/mcpy/id6760366135">
          <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" aria-hidden="true">
            <path d="M11.43 8.5c-.02-2.04 1.66-3.02 1.74-3.07-.95-1.38-2.43-1.57-2.95-1.6-1.25-.13-2.45.74-3.09.74-.65 0-1.63-.72-2.69-.7-1.38.02-2.66.81-3.37 2.05-1.44 2.49-.37 6.18 1.03 8.2.69.99 1.5 2.1 2.57 2.06 1.03-.04 1.42-.67 2.66-.67 1.24 0 1.59.67 2.68.65 1.11-.02 1.81-1.01 2.49-2.01.78-1.15 1.1-2.27 1.12-2.33-.02-.01-2.15-.83-2.19-3.32zM9.4 2.5c.57-.69.95-1.65.85-2.6-.82.03-1.82.55-2.41 1.24-.53.61-.99 1.59-.87 2.52.92.07 1.86-.47 2.43-1.16z" />
          </svg>
          <span className="nav-cta-label">Download on App Store</span>
          <span className="nav-cta-arrow arrow">→</span>
        </a>
      </div>
    </nav>
  );
}

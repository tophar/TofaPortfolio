export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Tofa David, home">
        <span className="brand-mark" aria-hidden="true">TD</span>
        <span>Tofa David</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/#work">Work</a>
        <a href="/#approach">Approach</a>
        <a href="/about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span className="brand-mark" aria-hidden="true">TD</span>
        <p>Building usable, useful, and commercially viable products.</p>
      </div>
      <div className="footer-links">
        <a href="mailto:tophar95@gmail.com">Email</a>
        <a href="https://tofa.notion.site/Building-useable-useful-and-beautiful-products-7955b4f0e8ba4bf9b5b05f40cb366a58" target="_blank" rel="noreferrer">Archive</a>
        <a href="#top">Back to top ↑</a>
      </div>
      <p className="copyright">© 2026 Oluwatofarati David</p>
    </footer>
  );
}

export function ProjectVisual({ theme, compact = false }: { theme: string; compact?: boolean }) {
  return (
    <div className={`project-visual visual-${theme} ${compact ? "visual-compact" : ""}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-window window-a"><span /><span /><span /></div>
      <div className="visual-window window-b"><span /><span /></div>
      <div className="visual-orb" />
      <div className="visual-code">{theme === "lime" ? "OPS / 04" : theme === "blue" ? "CLOUD / GTM" : "SAVE / TOGETHER"}</div>
    </div>
  );
}

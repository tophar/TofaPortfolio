import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Tofa David, home">
        <span className="brand-mark" aria-hidden="true">TD</span>
        <span>Tofa David</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#approach">Approach</Link>
        <Link href="/about">About</Link>
        <Link href="/#contact">Contact</Link>
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

export function ProjectVisual({
  theme,
  compact = false,
  imageSrc,
  imageAlt = "",
}: {
  theme: string;
  compact?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (imageSrc) {
    return (
      <div className={`project-visual project-visual-image ${compact ? "visual-compact" : ""}`}>
        <Image src={imageSrc} alt={imageAlt} fill sizes={compact ? "(max-width: 900px) 100vw, 1280px" : "(max-width: 900px) 100vw, 56vw"} />
      </div>
    );
  }

  return (
    <div className={`project-visual visual-${theme} ${compact ? "visual-compact" : ""}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-window window-a"><span /><span /><span /></div>
      <div className="visual-window window-b"><span /><span /></div>
      <div className="visual-orb" />
      <div className="visual-code">{theme === "lime" ? "OPS / 04" : theme === "blue" ? "CLOUD / GTM" : theme === "teal" ? "NFC / NFT" : "SAVE / TOGETHER"}</div>
    </div>
  );
}

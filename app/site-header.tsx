"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close menu whenever the route changes (per React recommendations for derived state)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleHashLinkClick = (hash: string) => {
    closeMenu();
    // If on homepage already, smooth scroll to target
    if (pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Tofa David, home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <Image src="/tofa-logo.png" alt="" width={42} height={42} priority />
          </span>
          <span>Tofa David</span>
        </Link>

        <div className="header-controls">
          {/* Desktop navigation */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="/#work">Work</Link>
            <Link href="/ai-lab">AI Lab</Link>
            <Link href="/about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          {/* Theme switcher */}
          <ThemeToggle id="header-theme-toggle" />

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-overlay"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="mobile-menu-btn-icon" aria-hidden="true">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </span>
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </header>

      {/* Full-screen responsive mobile menu overlay */}
      {isOpen && (
        <div
          id="mobile-navigation-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="mobile-menu-overlay"
        >
          {/* Mobile menu top header bar matching the page header */}
          <div className="mobile-menu-topbar">
            <Link className="brand" href="/" aria-label="Tofa David, home" onClick={closeMenu}>
              <span className="brand-mark" aria-hidden="true">
                <Image src="/tofa-logo.png" alt="" width={42} height={42} priority />
              </span>
              <span>Tofa David</span>
            </Link>

            <div className="header-controls">
              <ThemeToggle id="mobile-menu-theme-toggle" />
              <button
                type="button"
                className="mobile-menu-btn mobile-menu-btn-active"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <span className="mobile-menu-btn-icon" aria-hidden="true">
                  <X size={20} />
                </span>
                <span className="sr-only">Close navigation menu</span>
              </button>
            </div>
          </div>

          {/* Main content of mobile drawer */}
          <div className="mobile-menu-body">
            <div className="mobile-menu-section-label">Navigation</div>
            <nav className="mobile-nav-list" aria-label="Mobile navigation links">
              <Link
                href="/#work"
                onClick={() => handleHashLinkClick("#work")}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-item-left">
                  <span className="mobile-nav-num">01</span>
                  <span className="mobile-nav-label">Work</span>
                </div>
                <ArrowUpRight className="mobile-nav-arrow" size={20} aria-hidden="true" />
              </Link>

              <Link
                href="/ai-lab"
                onClick={closeMenu}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-item-left">
                  <span className="mobile-nav-num">02</span>
                  <span className="mobile-nav-label">AI Lab</span>
                  <span className="mobile-nav-tag">Interactive</span>
                </div>
                <ArrowUpRight className="mobile-nav-arrow" size={20} aria-hidden="true" />
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-item-left">
                  <span className="mobile-nav-num">03</span>
                  <span className="mobile-nav-label">About</span>
                </div>
                <ArrowUpRight className="mobile-nav-arrow" size={20} aria-hidden="true" />
              </Link>

              <Link
                href="/#contact"
                onClick={() => handleHashLinkClick("#contact")}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-item-left">
                  <span className="mobile-nav-num">04</span>
                  <span className="mobile-nav-label">Contact</span>
                </div>
                <ArrowUpRight className="mobile-nav-arrow" size={20} aria-hidden="true" />
              </Link>
            </nav>

            {/* Mobile menu bottom contact & archive links */}
            <div className="mobile-menu-footer">
              <div className="mobile-menu-contact-box">
                <span className="mobile-menu-section-label">Direct Contact</span>
                <a
                  href="mailto:tophar95@gmail.com"
                  className="mobile-menu-email-link"
                  onClick={closeMenu}
                >
                  tophar95@gmail.com <span aria-hidden="true">↗</span>
                </a>
                <p className="mobile-menu-availability">
                  Based in Abuja, Nigeria · Open to select advisory & product leadership
                </p>
              </div>

              <div className="mobile-menu-extra-links">
                <a
                  href="https://tofa.notion.site/Building-useable-useful-and-beautiful-products-7955b4f0e8ba4bf9b5b05f40cb366a58"
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-menu-archive-link"
                  onClick={closeMenu}
                >
                  Notion Case Studies Archive ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

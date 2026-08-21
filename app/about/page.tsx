import type { Metadata } from "next";
import { experience } from "../portfolio-data";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "About — Tofa David",
  description: "The journey and working philosophy of product design and strategy leader Tofa David.",
  openGraph: { title: "About — Tofa David", description: "The journey and working philosophy of product design and strategy leader Tofa David.", images: [] },
  twitter: { card: "summary", title: "About — Tofa David", description: "The journey and working philosophy of product design and strategy leader Tofa David.", images: [] },
};

export default function AboutPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="page-hero about-page-hero">
        <p className="eyebrow">About</p>
        <h1>I work where product decisions meet business reality.</h1>
        <p className="page-dek">I began in visual and brand design, moved deeper into digital products and research, and grew into roles spanning product strategy, leadership, marketing, and growth.</p>
      </section>

      <section className="about-story">
        <div className="story-statement">
          <p>Based in Abuja, working globally</p>
          <strong>10+ years</strong>
        </div>
        <div className="story-copy">
          <p>That breadth has taught me that a polished interface is only one part of a useful product. The strongest work begins with a clear problem, respects the realities of the business, and gives people a reason to adopt it.</p>
          <p>Today I lead product design at DPAnalytics Solutions, shaping enterprise products from scope and strategy through MVP definition and delivery. I’m most energised by ambiguous problems, complex systems, and teams ready to make design a meaningful business partner.</p>
        </div>
      </section>

      <section className="philosophy-section">
        <p className="eyebrow">How I work</p>
        <div className="philosophy-grid">
          <article><span>01</span><h2>Start with the stakes</h2><p>Understand what must change for users and for the business before deciding what to make.</p></article>
          <article><span>02</span><h2>Make decisions visible</h2><p>Give teams a shared model of the problem, the trade-offs, and the direction.</p></article>
          <article><span>03</span><h2>Design for adoption</h2><p>Consider positioning, trust, onboarding, and the surrounding ecosystem—not just the interface.</p></article>
        </div>
      </section>

      <section className="career-section">
        <p className="eyebrow">Selected experience</p>
        <div className="experience-list full-experience">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`}>
              <p className="experience-period">{item.period}</p>
              <div><h3>{item.company}</h3><p className="experience-role">{item.role}</p><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="personal-section">
        <p className="eyebrow">Off the clock</p>
        <h2>Business, photography, AI, and a stubborn curiosity about how things work.</h2>
      </section>
      <SiteFooter />
    </main>
  );
}

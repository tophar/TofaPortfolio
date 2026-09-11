import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "AI Lab — Tofa David",
  description:
    "Products and experiments built by Tofa David to turn ideas into useful, testable software.",
  openGraph: {
    title: "AI Lab — Tofa David",
    description:
      "Products and experiments built to turn ideas into useful software.",
  },
};

const products = [
  {
    number: "01",
    name: "StitchFlow",
    type: "Operations product",
    description:
      "A clearer way for tailoring businesses to manage customers, measurements, production schedules, and payouts.",
    highlights: [
      "Capacity-aware workshop planning",
      "Digital job cards and measurement history",
      "Deposits, expenses, and tailor commissions",
    ],
    href: "/ai-lab/stitchflow",
  },
  {
    number: "02",
    name: "Giftlane",
    type: "Event wishlist product",
    description:
      "A simple way to create and share wishlists, avoid duplicate gifts, and make group contributions possible.",
    highlights: [
      "Wishlists for life’s important moments",
      "Guest reservations without the guesswork",
      "Contributions towards higher-value gifts",
    ],
    href: "/ai-lab/giftlane",
  },
];

export default function AiLabPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="ai-index-hero">
        <p className="eyebrow">AI Lab</p>
        <h1>Ideas, made useful.</h1>
        <p>
          Products I build to move an idea beyond the deck and into something
          people can see, use, and respond to.
        </p>
      </section>

      <section className="ai-index-products" aria-labelledby="ai-products-title">
        <header className="ai-index-section-header">
          <h2 id="ai-products-title">Selected products</h2>
          <p>Two practical tools, each shaped around a real problem.</p>
        </header>

        <div className="ai-index-grid">
          {products.map((product) => (
            <article className="ai-index-card" key={product.name}>
              <div className="ai-index-card-meta">
                <span>{product.number}</span>
                <span>{product.type}</span>
              </div>

              <div className="ai-index-card-copy">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>

              <ul>
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <Link href={product.href} className="ai-index-card-link">
                View product and demo <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-index-writing" aria-labelledby="ai-writing-title">
        <p className="eyebrow">Writing</p>
        <div>
          <h2 id="ai-writing-title">Designing in the age of AI</h2>
          <p>
            My view on AI as an exoskeleton for product work: it increases the
            speed of making, while taste, judgment, empathy, and direction remain
            human responsibilities.
          </p>
          <a
            href="https://medium.com/@tophar95/designing-in-the-age-of-ai-why-i-feel-like-iron-man-and-you-should-too-57ad2afd182c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Read the essay on Medium ↗
          </a>
        </div>
      </section>

      <section className="ai-index-contact">
        <p>Have a useful problem worth exploring?</p>
        <Link href="/#contact" className="text-link">
          Start a conversation ↗
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

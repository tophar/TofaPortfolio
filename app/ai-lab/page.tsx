import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "AI Lab & Design Ideology — Tofa David",
  description:
    "Where ideas become reality using AI. Practical products built by Tofa David, exploring AI as a creative exoskeleton and featuring the essay 'Designing in the Age of AI: Why I Feel Like Iron Man'.",
  openGraph: {
    title: "AI Lab & Design Ideology — Tofa David",
    description: "Where ideas become reality using AI. Practical tools and design perspectives on AI as a creative exoskeleton.",
  },
};

const stitchflowValues = [
  "Plan work against each tailor’s real capacity.",
  "Keep measurements, references, and job notes with every order.",
  "Track deposits, expenses, commissions, and balances in one place.",
];

const giftlaneValues = [
  "Create and share a wishlist for any important life event.",
  "Let guests reserve gifts so the same item is not bought twice.",
  "Make bigger wishes possible through group contributions.",
];

export default function AiLabPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="page-hero ai-lab-hero">
        <p className="eyebrow">AI Lab</p>
        <h1>Where ideas become reality with AI.</h1>
        <p className="page-dek">
          This is where I bring some of the product ideas I have to reality using AI.
          Instead of keeping concepts locked in wireframes and strategy decks, I build
          practical, living tools that test how intelligent workflows remove everyday friction.
        </p>
      </section>

      {/* Product Cards Beside Each Other */}
      <section className="lab-products-section" aria-label="AI Lab Products">
        <div className="lab-products-grid">
          {/* Card 1: StitchFlow */}
          <article className="lab-product-card" id="card-stitchflow">
            <div className="lab-product-card-body">
              <div className="lab-product-card-top">
                <span className="eyebrow">Product 01</span>
                <span className="lab-product-badge">Operations</span>
              </div>
              <h2 id="stitchflow-title">StitchFlow</h2>
              <p className="lab-product-card-lead">
                A clearer way to run a tailoring business—from the first customer
                measurement to workshop planning and final payout.
              </p>

              <ul className="lab-product-card-values">
                {stitchflowValues.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="lab-product-card-footer">
              <div className="lab-product-meta-row">
                <span>Built for</span>
                <span>Tailoring businesses and production teams</span>
              </div>
              <Link
                href="/ai-lab/stitchflow"
                className="button button-primary lab-product-card-cta"
                id="stitchflow-view-cta"
              >
                View StitchFlow and demo <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>

          {/* Card 2: Giftlane */}
          <article className="lab-product-card" id="card-giftlane">
            <div className="lab-product-card-body">
              <div className="lab-product-card-top">
                <span className="eyebrow">Product 02</span>
                <span className="lab-product-badge">Social Wishlists</span>
              </div>
              <h2 id="giftlane-title">Giftlane</h2>
              <p className="lab-product-card-lead">
                Event wishlists that give friends and family a clear, thoughtful way
                to choose, reserve, or contribute towards the right gift.
              </p>

              <ul className="lab-product-card-values">
                {giftlaneValues.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="lab-product-card-footer">
              <div className="lab-product-meta-row">
                <span>Built for</span>
                <span>Weddings, baby showers, birthdays & milestones</span>
              </div>
              <Link
                href="/ai-lab/giftlane"
                className="button button-primary lab-product-card-cta"
                id="giftlane-view-cta"
              >
                View Giftlane and demo <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Design Ideology Section (Below Actual Products Cards) */}
      <section className="lab-ideology" aria-labelledby="lab-ideology-heading">
        <div className="lab-ideology-header">
          <p className="eyebrow">Design Ideology · Perspective</p>
          <h2 id="lab-ideology-heading">
            Designing in the age of AI: Why I feel like Iron Man (and you should too)
          </h2>
        </div>

        <div className="lab-ideology-body">
          <div className="lab-ideology-quote-block">
            <div className="lab-ideology-quote-content">
              <blockquote>
                “The future belongs to those with beautiful minds.”
              </blockquote>
              <p className="lab-ideology-author">Oluwatofarati David</p>
              <p className="lab-ideology-article-meta">
                From my Medium essay on how artificial intelligence transforms product designers into augmented builders.
              </p>
            </div>
            <a
              href="https://medium.com/@tophar95/designing-in-the-age-of-ai-why-i-feel-like-iron-man-and-you-should-too-57ad2afd182c"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary lab-ideology-cta"
              id="medium-article-link"
            >
              Read article on Medium <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="lab-ideology-summary">
            <div className="lab-ideology-point">
              <h3>The Exoskeleton, Not the Replacement</h3>
              <p>
                I view AI not as a substitute for human craftsmanship, but as Tony Stark’s armor.
                The suit provides the propulsion, computational muscle, and speed—while the heart,
                moral compass, user empathy, and strategic direction remain entirely human.
              </p>
            </div>

            <div className="lab-ideology-point">
              <h3>Taste as the Real Competitive Moat</h3>
              <p>
                When AI makes generating interface components, code blocks, and copy virtually instantaneous,
                the commodity is technical syntax. The rarest, most defensible advantage becomes taste,
                strategic discernment, and the ability to formulate the right problem.
              </p>
            </div>

            <div className="lab-ideology-point">
              <h3>Collapsing Idea to Working Reality</h3>
              <p>
                The friction between having a compelling product thesis and testing working software
                has collapsed. The AI Lab is where I put this superpower into practice—shipping real tools
                that solve concrete problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lab-note">
        <p>
          The lab will grow as new products become useful enough to show.
          Interested in testing an early build?
        </p>
        <Link href="/#contact" className="text-link">
          Start a conversation ↗
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

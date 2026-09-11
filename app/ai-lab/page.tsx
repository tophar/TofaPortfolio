import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "AI Lab — Tofa David",
  description:
    "Practical products built by Tofa David, including StitchFlow and Giftlane.",
  openGraph: {
    title: "AI Lab — Tofa David",
    description: "Practical AI products built to remove real operational friction.",
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
        <h1>Small tools for real work.</h1>
        <p className="page-dek">
          A collection of products I build to test how AI can remove everyday
          operational friction. The work is practical, focused, and designed to
          be used.
        </p>
      </section>

      <section className="lab-feature" aria-labelledby="stitchflow-title">
        <div className="lab-feature-copy">
          <p className="eyebrow">Product 01</p>
          <h2 id="stitchflow-title">StitchFlow</h2>
          <p className="lab-feature-lead">
            A clearer way to run a tailoring business—from the first customer
            measurement to workshop planning and final payout.
          </p>

          <ul className="lab-value-list">
            {stitchflowValues.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <Link
            href="/ai-lab/stitchflow"
            className="button button-primary"
            id="stitchflow-view-cta"
          >
            View StitchFlow and demo <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <dl className="lab-feature-meta">
          <div>
            <dt>Built for</dt>
            <dd>Tailoring businesses and production teams</dd>
          </div>
          <div>
            <dt>Core value</dt>
            <dd>One reliable workflow instead of paper and scattered messages</dd>
          </div>
          <div>
            <dt>Available now</dt>
            <dd>Interactive product walkthrough</dd>
          </div>
        </dl>
      </section>

      <section
        className="lab-feature lab-feature--giftlane"
        aria-labelledby="giftlane-title"
      >
        <div className="lab-feature-copy">
          <p className="eyebrow">Product 02</p>
          <h2 id="giftlane-title">Giftlane</h2>
          <p className="lab-feature-lead">
            Event wishlists that give friends and family a clear, thoughtful way
            to choose, reserve, or contribute towards the right gift.
          </p>

          <ul className="lab-value-list">
            {giftlaneValues.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <Link
            href="/ai-lab/giftlane"
            className="button button-primary"
            id="giftlane-view-cta"
          >
            View Giftlane and demo <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <dl className="lab-feature-meta">
          <div>
            <dt>Built for</dt>
            <dd>Weddings, baby showers, birthdays, and life&rsquo;s milestones</dd>
          </div>
          <div>
            <dt>Core value</dt>
            <dd>Less guesswork, fewer duplicate gifts, and easier group giving</dd>
          </div>
          <div>
            <dt>Origin</dt>
            <dd>Built for my wife and me as we prepared to welcome our baby</dd>
          </div>
        </dl>
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

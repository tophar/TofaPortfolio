import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "AI Lab — Tofa David",
  description:
    "Practical AI products built by Tofa David, including StitchFlow for bespoke tailoring operations.",
  openGraph: {
    title: "AI Lab — Tofa David",
    description: "Practical AI products built to remove real operational friction.",
  },
};

const valuePoints = [
  "Plan work against each tailor’s real capacity.",
  "Keep measurements, references, and job notes with every order.",
  "Track deposits, expenses, commissions, and balances in one place.",
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
          <p className="eyebrow">Featured product</p>
          <h2 id="stitchflow-title">StitchFlow</h2>
          <p className="lab-feature-lead">
            A clearer way to run a tailoring business—from the first customer
            measurement to workshop planning and final payout.
          </p>

          <ul className="lab-value-list">
            {valuePoints.map((point) => (
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

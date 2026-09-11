import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../site-chrome";

export const metadata: Metadata = {
  title: "StitchFlow — Tofa David",
  description:
    "StitchFlow brings orders, measurements, workshop schedules, and tailor payouts into one practical workflow.",
  openGraph: {
    title: "StitchFlow — Tofa David",
    description: "A practical operating system for bespoke tailoring businesses.",
  },
};

const outcomes = [
  {
    title: "Promise dates with confidence",
    text: "Work is scheduled against each tailor’s actual daily capacity, so the team can spot overload before it becomes a missed deadline.",
  },
  {
    title: "Keep the job clear",
    text: "Measurements, style references, fabric details, and production notes stay attached to the order instead of moving through paper and memory.",
  },
  {
    title: "Know what each order earns",
    text: "Deposits, expenses, balances, and piece-rate commissions are tracked together, giving owners a more honest view of margin.",
  },
];

const capabilities = [
  [
    "Customers and orders",
    "Profiles, measurement history, style references, fabrics, deposits, and balances.",
  ],
  [
    "Workshop planning",
    "A capacity-aware calendar for assigning work without overloading the team.",
  ],
  [
    "Digital job cards",
    "The information a tailor needs to complete a garment, kept in one dependable record.",
  ],
  [
    "Payouts and reporting",
    "Piece-rate commissions, expenses, outstanding balances, and workshop performance.",
  ],
];

export default function StitchFlowDetailPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="case-hero stitchflow-hero">
        <Link href="/ai-lab" className="back-link" id="back-to-lab-top">
          ← AI Lab
        </Link>

        <div className="case-title">
          <p className="eyebrow">StitchFlow</p>
          <h1>Run the workshop without the paper chase.</h1>
          <p className="page-dek">
            StitchFlow brings orders, measurements, production schedules, and
            tailor payouts into one clear workflow for bespoke clothing businesses.
          </p>
        </div>

        <dl className="stitchflow-meta">
          <div>
            <dt>Product</dt>
            <dd>Operations platform</dd>
          </div>
          <div>
            <dt>Designed for</dt>
            <dd>Owners, managers, and tailors</dd>
          </div>
          <div>
            <dt>My focus</dt>
            <dd>Product strategy, workflows, and experience design</dd>
          </div>
        </dl>
      </section>

      <section className="stitchflow-demo" aria-labelledby="demo-title">
        <div className="stitchflow-section-heading">
          <p className="eyebrow">Product demo</p>
          <h2 id="demo-title">See the core workflow.</h2>
          <p>Follow an order from intake through scheduling, production, and payout.</p>
        </div>

        <div className="stitchflow-demo-frame" id="stitchflow-interactive-demo">
          <iframe
            src="https://app.supademo.com/embed/cmtw5lruk0uuwqm7xmy9lvhd1?embed_v=2&utm_source=embed"
            loading="lazy"
            title="StitchFlow product walkthrough"
            allow="clipboard-write"
            allowFullScreen
          />
        </div>
        <p className="stitchflow-demo-caption">
          Interactive walkthrough · Click inside the demo to move through each step.
        </p>
      </section>

      <section className="stitchflow-value" aria-labelledby="value-title">
        <div className="stitchflow-section-heading">
          <p className="eyebrow">Why it matters</p>
          <h2 id="value-title">One source of truth from measurement to payout.</h2>
        </div>

        <div className="stitchflow-outcomes">
          {outcomes.map((outcome, index) => (
            <article key={outcome.title}>
              <span>0{index + 1}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stitchflow-capabilities" aria-labelledby="capabilities-title">
        <div className="stitchflow-section-heading">
          <p className="eyebrow">Product scope</p>
          <h2 id="capabilities-title">What StitchFlow covers.</h2>
        </div>

        <div className="stitchflow-capability-list">
          {capabilities.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stitchflow-next">
        <Link href="/ai-lab" className="back-link">
          ← Back to AI Lab
        </Link>
        <Link href="/#contact" className="button button-primary">
          Discuss the product <span aria-hidden="true">↗</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

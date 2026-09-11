import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "My AI Lab — Tofa David",
  description:
    "A dedicated laboratory of functional AI software, agentic workflows, and domain-specific systems built by Tofa David, featuring StitchFlow.",
  openGraph: {
    title: "My AI Lab — Tofa David",
    description:
      "Explore working products and prototypes built with modern AI, structured schemas, and domain-specific operations.",
  },
};

export default function AiLabPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="page-hero ai-lab-hero">
        <p className="eyebrow" id="lab-eyebrow">
          AI Lab · Systems &amp; Software
        </p>
        <h1 id="lab-title">My AI Lab</h1>
        <p className="page-dek">
          A dedicated space for the functional products, systems, and prototypes
          I have been building with AI. Here, ideas move from structured domain models
          into working software that tackles real-world operational bottlenecks.
        </p>

        <div className="ai-lab-badge-row" aria-label="Lab status and highlights">
          <span className="ai-lab-pill ai-lab-pill-active">
            <span className="ai-lab-dot" aria-hidden="true" />
            Active Product: StitchFlow
          </span>
          <span className="ai-lab-pill">Domain: Bespoke Apparel &amp; Logistics</span>
          <span className="ai-lab-pill">Interactive Demo Ready</span>
        </div>
      </section>

      {/* Lab Products Directory */}
      <section className="ai-section-block" aria-labelledby="lab-products-title">
        <div className="ai-section-block-heading">
          <p className="case-label">01 · Featured Builds</p>
          <h2 id="lab-products-title" style={{ fontSize: "clamp(38px, 4.5vw, 68px)", lineHeight: 1.05, margin: "10px 0 16px", color: "var(--text)" }}>
            Products built in the lab.
          </h2>
          <p>
            End-to-end applications designed to eliminate industry-specific friction,
            manual chaos, and fragmented workflows.
          </p>
        </div>

        {/* StitchFlow Product Summary Card */}
        <article className="ai-lab-product-card" id="card-stitchflow">
          <div className="ai-lab-card-badge-row">
            <span className="eyebrow" style={{ margin: 0 }}>Featured Build · 01</span>
            <span className="ai-demo-badge">Interactive Demo Available</span>
          </div>

          <h3 className="ai-lab-card-title">StitchFlow</h3>
          
          <p className="ai-lab-card-summary">
            A specialized Enterprise Resource Planning (ERP) platform designed specifically
            for bespoke tailoring and apparel businesses. It transforms traditional, manual
            garment making into a streamlined digital workflow—from customer measurement
            vaults and capacity-based calendar scheduling to piece-rate commission payouts.
          </p>

          <div className="ai-lab-card-features-grid">
            <div className="ai-lab-card-feature-item">
              <strong>Smart Measurement Vault</strong>
              <p>Persistent customer profiles with order-locked measurement snapshots that preserve legacy sizing.</p>
            </div>
            <div className="ai-lab-card-feature-item">
              <strong>Capacity-Based Calendar</strong>
              <p>Prevents over-promising by checking each artisan&rsquo;s daily production limits (e.g. 1 suit/day).</p>
            </div>
            <div className="ai-lab-card-feature-item">
              <strong>Digital Job Cards &amp; Payouts</strong>
              <p>Eliminates lost paper tags, verbal miscommunications, and automates weekly piece-rate commissions.</p>
            </div>
          </div>

          <div className="ai-lab-card-action-bar">
            <div>
              <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: ".08em", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>
                Format
              </span>
              <strong style={{ fontSize: "15px", color: "var(--text)" }}>
                In-depth Case Breakdown &amp; Interactive Walkthrough
              </strong>
            </div>

            <Link href="/ai-lab/stitchflow" className="button button-primary" id="stitchflow-view-cta">
              Explore StitchFlow &amp; Interactive Demo →
            </Link>
          </div>
        </article>
      </section>

      {/* Upcoming Lab Projects */}
      <section className="ai-section-block ai-lab-future" aria-labelledby="future-lab-title">
        <div className="ai-section-block-heading">
          <p className="case-label">02 · In The Pipeline</p>
          <h3 id="future-lab-title">More AI tools currently in development.</h3>
          <p>
            StitchFlow is the first product in the lab. Additional agentic workflows,
            domain-specific utilities, and AI applications will be added here as they
            reach testable prototypes.
          </p>
        </div>

        <div className="ai-upcoming-grid">
          <article className="ai-upcoming-card" id="pipeline-01">
            <span className="ai-upcoming-status">Experiment 02 · Concept Phase</span>
            <h4>Agentic Research &amp; Synthesis</h4>
            <p>
              Autonomous domain discovery agents that extract structured market signals
              and competitive vectors from unstructured industry documents.
            </p>
          </article>

          <article className="ai-upcoming-card" id="pipeline-02">
            <span className="ai-upcoming-status">Experiment 03 · Prototyping</span>
            <h4>Vision-Based Measurement Intake</h4>
            <p>
              Computer vision utilities mapping smartphone imagery to apparel sizing
              recommendations and initial garment drafting guides.
            </p>
          </article>

          <article className="ai-upcoming-card" id="pipeline-03">
            <span className="ai-upcoming-status">Experiment 04 · Exploration</span>
            <h4>Conversational Shop Floor Assistant</h4>
            <p>
              Voice-to-job-card assistant enabling hands-free artisan logging, task updates,
              and inventory checks on the production floor.
            </p>
          </article>
        </div>

        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <p style={{ color: "var(--text-muted)", fontSize: "17px", margin: "0 0 20px" }}>
            Interested in testing an early build or exploring a collaboration?
          </p>
          <Link href="/#contact" className="button button-primary" id="lab-contact-btn">
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

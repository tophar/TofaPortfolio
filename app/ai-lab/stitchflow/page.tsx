import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../site-chrome";

export const metadata: Metadata = {
  title: "StitchFlow — My AI Lab · Tofa David",
  description:
    "Explore StitchFlow, a specialized Enterprise Resource Planning system for bespoke tailoring with an interactive product demo, capacity calendars, and automated payouts.",
  openGraph: {
    title: "StitchFlow — My AI Lab",
    description:
      "Interactive demo and product architecture for StitchFlow, transforming bespoke tailoring into a scalable, capacity-driven digital operation.",
  },
};

export default function StitchFlowDetailPage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="case-hero" style={{ paddingBottom: "40px" }}>
        <div style={{ marginBottom: "32px" }}>
          <Link href="/ai-lab" className="back-link" id="back-to-lab-top">
            ← Back to My AI Lab
          </Link>
        </div>

        <div className="case-title">
          <p className="eyebrow">AI Lab · Product 01</p>
          <h1>StitchFlow</h1>
          <p className="page-dek">
            A specialized Enterprise Resource Planning (ERP) solution designed
            specifically for bespoke tailoring and clothing businesses. It transforms
            the traditional, manual process of garment making into a streamlined, digital
            workflow—ensuring that nothing falls through the cracks, from the first
            measurement to the final stitch and payment.
          </p>
        </div>

        <div className="case-details">
          <div>
            <span>Category</span>
            <strong>Operations ERP &amp; Workflow Intelligence</strong>
          </div>
          <div>
            <span>Target Users</span>
            <strong>Atelier Owners, Shop Managers &amp; Tailors</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>Functional Interactive Walkthrough</strong>
          </div>
          <div>
            <span>Architecture</span>
            <strong>Structured Schemas · Capacity Scheduling</strong>
          </div>
        </div>
      </section>

      {/* Interactive Supademo Embed */}
      <section className="ai-section-block" style={{ paddingTop: "20px" }}>
        <div className="ai-demo-container" id="stitchflow-interactive-demo">
          <div className="ai-demo-topbar">
            <div className="ai-demo-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="ai-demo-bar-title">StitchFlow · Complete Interactive Walkthrough</span>
            <span className="ai-demo-badge">Interactive Demo</span>
          </div>

          <div className="ai-demo-frame">
            <div
              style={{
                position: "relative",
                boxSizing: "content-box",
                maxHeight: "80vh",
                width: "100%",
                aspectRatio: "1.62",
                padding: 0,
              }}
            >
              <iframe
                src="https://app.supademo.com/embed/cmtw5lruk0uuwqm7xmy9lvhd1?embed_v=2&utm_source=embed"
                loading="lazy"
                title="Complete Order Management and Financial Operations in StitchFlow"
                allow="clipboard-write"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                allowFullScreen
              />
            </div>
          </div>

          <p className="ai-demo-caption">
            <strong>Interactive Walkthrough:</strong> Click anywhere within the frame
            above to step through order creation, digital job cards, artisan daily
            capacity allocation, and weekly commission calculations in real time.
          </p>
        </div>

        {/* 1. The Core Value Proposition */}
        <div className="ai-section-block">
          <div className="ai-section-block-heading">
            <p className="case-label">01 · The Core Value Proposition</p>
            <h3>Solving the three biggest headaches in tailoring.</h3>
            <p>
              Bespoke garment production breaks down at the handoff points between
              measurement taking, workshop scheduling, and financial accounting.
            </p>
          </div>

          <div className="ai-headaches-grid">
            <article className="ai-headache-card" id="detail-value-prop-bottlenecks">
              <span className="ai-headache-number">Problem &amp; Fix 01</span>
              <h4>Production Bottlenecks</h4>
              <p>
                Prevents over-promising and missed deadlines by using a capacity-based
                calendar matched to each artisan’s real daily output limits.
              </p>
            </article>

            <article className="ai-headache-card" id="detail-value-prop-info-gap">
              <span className="ai-headache-number">Problem &amp; Fix 02</span>
              <h4>Information Gap</h4>
              <p>
                Ensures tailors have immutable measurements, style reference images, and
                fabric details in one digital &ldquo;Job Card,&rdquo; ending verbal confusion.
              </p>
            </article>

            <article className="ai-headache-card" id="detail-value-prop-finance">
              <span className="ai-headache-number">Problem &amp; Fix 03</span>
              <h4>Financial Oversight</h4>
              <p>
                Tracks every dollar from customer deposits and business fabric expenses to
                tailor piece-rate commissions and true business net profit.
              </p>
            </article>
          </div>
        </div>

        {/* 2. Key Functional Modules */}
        <div className="ai-section-block">
          <div className="ai-section-block-heading">
            <p className="case-label">02 · Functional Modules</p>
            <h3>An end-to-end operational engine.</h3>
            <p>
              Engineered with specialized business logic that models how tailoring
              ateliers actually operate day-to-day.
            </p>
          </div>

          <div className="ai-modules-grid">
            <article className="ai-module-card" id="detail-module-vault">
              <span className="ai-module-letter">Module A</span>
              <h4>Smart Customer &amp; Measurement Vault</h4>
              <div className="ai-module-features">
                <div className="ai-module-feature">
                  <strong>Persistent Profiles</strong>
                  <p>Stores customer contact history, fit preferences, and detailed bodily measurements.</p>
                </div>
                <div className="ai-module-feature">
                  <strong>Measurement Snapshot</strong>
                  <p>
                    Unlike a simple contact list, the system locks a customer&rsquo;s measurements to each
                    specific order. If a customer&rsquo;s size changes later, previous order records remain intact.
                  </p>
                </div>
              </div>
            </article>

            <article className="ai-module-card" id="detail-module-order-desk">
              <span className="ai-module-letter">Module B</span>
              <h4>Digital Order Desk</h4>
              <div className="ai-module-features">
                <div className="ai-module-feature">
                  <strong>Multi-Modal Style Capture</strong>
                  <p>
                    Orders include uploaded photos, Pinterest/Instagram reference links, and detailed design descriptions.
                  </p>
                </div>
                <div className="ai-module-feature">
                  <strong>Fabric Logic</strong>
                  <p>
                    Differentiates customer-provided from business-sourced fabric and auto-generates a manager shopping list.
                  </p>
                </div>
              </div>
            </article>

            <article className="ai-module-card" id="detail-module-calendar">
              <span className="ai-module-letter">Module C</span>
              <h4>Capacity-Based Production Calendar</h4>
              <div className="ai-module-features">
                <div className="ai-module-feature">
                  <strong>Intelligent Assignment</strong>
                  <p>
                    Checks artisan daily limits (e.g., &ldquo;1 suit per day&rdquo;) before scheduling to avoid overloading.
                  </p>
                </div>
                <div className="ai-module-feature">
                  <strong>Visual Scheduling</strong>
                  <p>
                    A drag-and-drop calendar showing who is free and who is booked, preventing burnout and delays.
                  </p>
                </div>
              </div>
            </article>

            <article className="ai-module-card" id="detail-module-commission">
              <span className="ai-module-letter">Module D</span>
              <h4>Automated Commission &amp; Payout Engine</h4>
              <div className="ai-module-features">
                <div className="ai-module-feature">
                  <strong>Pay-per-Piece Logic</strong>
                  <p>
                    Calculates tailor earnings automatically based on the style, complexity, and garments assigned.
                  </p>
                </div>
                <div className="ai-module-feature">
                  <strong>Financial Transparency</strong>
                  <p>
                    Tailors see expected weekly earnings, while owners get an instant payout report to settle weekly accounts.
                  </p>
                </div>
              </div>
            </article>

            <article className="ai-module-card ai-module-card--span" id="detail-module-accounting">
              <span className="ai-module-letter">Module E</span>
              <h4>Full-Stack Accounting</h4>
              <div className="ai-module-features">
                <div className="ai-module-feature">
                  <strong>Deposit &amp; Balance Tracking</strong>
                  <p>
                    Manages customer deposits, outstanding balances, and multi-channel payment records across cash, bank transfers, and POS.
                  </p>
                </div>
                <div className="ai-module-feature">
                  <strong>Granular Overhead Logging</strong>
                  <p>
                    Dedicated ledger for operating expenses (workshop rent, specialized threads, generator fuel, machine maintenance) to compute real net profit.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* 3. User Roles */}
        <div className="ai-section-block">
          <div className="ai-section-block-heading">
            <p className="case-label">03 · User Roles</p>
            <h3>Tailored experiences for every stakeholder.</h3>
            <p>
              Different screens and permission levels built specifically for the atelier hierarchy.
            </p>
          </div>

          <div className="ai-roles-grid">
            <article className="ai-role-card" id="detail-role-owner">
              <span className="ai-role-badge">Role 01 · Visionary</span>
              <h4>The Business Owner</h4>
              <p>
                Views the big picture: gross margins, net profit, workshop throughput, tailor performance, and monthly business growth.
              </p>
            </article>

            <article className="ai-role-card" id="detail-role-manager">
              <span className="ai-role-badge">Role 02 · Operator</span>
              <h4>The Shop Manager</h4>
              <p>
                Creates incoming orders, assigns jobs on the calendar, buys required fabrics, tracks deposits, and handles customer communication.
              </p>
            </article>

            <article className="ai-role-card" id="detail-role-tailor">
              <span className="ai-role-badge">Role 03 · Executor</span>
              <h4>The Tailor</h4>
              <p>
                Logs in to view daily tasks, examines measurements and style reference photos on digital job cards, and marks orders complete.
              </p>
            </article>
          </div>
        </div>

        {/* 4. Why This Works (The "AI-Ready" Advantage) */}
        <div className="ai-ready-banner" id="detail-ai-advantage">
          <div>
            <p className="case-label" style={{ color: "var(--accent-eyebrow)" }}>
              The Architectural Edge
            </p>
            <h4>Why This Works: The &ldquo;AI-Ready&rdquo; Advantage</h4>
          </div>

          <div>
            <p style={{ marginTop: 0, fontSize: "19px", lineHeight: 1.5, color: "var(--card-approach-text)" }}>
              Because this system is built with structured data schemas and rigorous operational logic:
            </p>
            <ul className="ai-ready-list">
              <li>
                <span>✓</span>
                <div>
                  <strong>Eliminates paper tags:</strong> Physical cards that tear, get misplaced, or become illegible are replaced by immutable digital records.
                </div>
              </li>
              <li>
                <span>✓</span>
                <div>
                  <strong>Eliminates verbal instructions:</strong> Style specifications and client notes are linked directly to each order ID.
                </div>
              </li>
              <li>
                <span>✓</span>
                <div>
                  <strong>Eliminates financial guesswork:</strong> Links every overhead and fabric expense to orders and categories for precise profitability.
                </div>
              </li>
            </ul>
            <p style={{ margin: "24px 0 0", fontStyle: "italic", color: "var(--card-approach-desc)", fontSize: "16px" }}>
              In short: StitchFlow turns a creative craft into a scalable, data-driven operation.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "60px", padding: "40px 0", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <Link href="/ai-lab" className="back-link">
            ← Back to all AI Lab projects
          </Link>
          <Link href="/#contact" className="button button-primary">
            Discuss this build ↗
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

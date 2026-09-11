import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../site-chrome";

export const metadata: Metadata = {
  title: "Giftlane — Tofa David",
  description:
    "Giftlane is a simple event wishlist platform for creating, sharing, reserving, and contributing towards meaningful gifts.",
  openGraph: {
    title: "Giftlane — Tofa David",
    description:
      "A simple event wishlist platform built from a real family need.",
  },
};

const valuePoints = [
  {
    title: "No more guessing",
    text: "Hosts share what would genuinely be useful, while guests still choose the gift that feels right to them.",
  },
  {
    title: "No duplicate gifts",
    text: "Guests can reserve or claim an item, keeping the list coordinated without a separate group chat.",
  },
  {
    title: "Bigger wishes become possible",
    text: "Friends and family can contribute together when one meaningful gift is too much for one person to cover.",
  },
];

const steps = [
  ["Create", "Choose the event and make a personal Wishlane."],
  ["Add wishes", "Add products, custom requests, or links from any store."],
  ["Share", "Send one link to friends and family."],
  ["Gift", "Guests reserve an item or contribute towards a larger one."],
];

export default function GiftlanePage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="case-hero giftlane-hero">
        <Link href="/ai-lab" className="back-link" id="back-to-lab-top">
          ← AI Lab
        </Link>

        <div className="case-title">
          <p className="eyebrow">Giftlane · Event wishlists</p>
          <h1>A better answer to “What should I get you?”</h1>
          <p className="page-dek">
            Giftlane helps people create a Wishlane for an important event, add
            what they would love to receive, and share it with the people who want
            to celebrate them.
          </p>
        </div>

        <dl className="giftlane-meta">
          <div>
            <dt>Product</dt>
            <dd>Event wishlist platform</dd>
          </div>
          <div>
            <dt>Designed for</dt>
            <dd>Hosts, families, friends, and gift-givers</dd>
          </div>
          <div>
            <dt>My focus</dt>
            <dd>Product idea, experience design, and productisation</dd>
          </div>
        </dl>
      </section>

      <section className="giftlane-demo" aria-labelledby="giftlane-demo-title">
        <div className="giftlane-section-heading">
          <p className="eyebrow">Product demo</p>
          <h2 id="giftlane-demo-title">Create and share a wedding Wishlane.</h2>
          <p>
            The walkthrough shows how a host creates a list, adds wishes, and
            manages it from one place.
          </p>
        </div>

        <div className="giftlane-demo-frame" id="giftlane-interactive-demo">
          <iframe
            src="https://app.supademo.com/embed/cmtw87fnq0w4mqm7xcd4lq42d?embed_v=2&utm_source=embed"
            loading="lazy"
            title="Create and manage a wedding wishlist on Giftlane"
            allow="clipboard-write"
            allowFullScreen
          />
        </div>
        <p className="giftlane-demo-caption">
          Interactive walkthrough · Click inside the demo to move through each step.
        </p>
      </section>

      <section className="giftlane-story" aria-labelledby="giftlane-story-title">
        <p className="eyebrow">Where it started</p>
        <div>
          <h2 id="giftlane-story-title">Built for a moment that mattered.</h2>
          <p>
            When my wife and I were preparing to welcome our baby, we needed a
            simple way to tell friends and family what would actually help—without
            scattered messages, repeated questions, or duplicate gifts.
          </p>
          <p>
            I built the first version for us, then productised the idea so other
            people could use it for baby showers, weddings, birthdays,
            housewarmings, and the other moments people gather around.
          </p>
        </div>
      </section>

      <section className="giftlane-value" aria-labelledby="giftlane-value-title">
        <div className="giftlane-section-heading">
          <p className="eyebrow">The value</p>
          <h2 id="giftlane-value-title">Simple for the host. Clear for every guest.</h2>
        </div>

        <div className="giftlane-value-grid">
          {valuePoints.map((point, index) => (
            <article key={point.title}>
              <span>0{index + 1}</span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="giftlane-flow" aria-labelledby="giftlane-flow-title">
        <div className="giftlane-section-heading">
          <p className="eyebrow">How it works</p>
          <h2 id="giftlane-flow-title">Create. Add wishes. Share. Gift.</h2>
        </div>

        <div className="giftlane-flow-list">
          {steps.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="giftlane-next">
        <Link href="/ai-lab" className="back-link">
          ← Back to AI Lab
        </Link>
        <div className="giftlane-actions">
          <a
            href="https://www.mygiftlane.com/"
            className="button button-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Visit Giftlane <span aria-hidden="true">↗</span>
          </a>
          <Link href="/#contact" className="button button-primary">
            Discuss the product <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

import { experience, projects } from "./portfolio-data";
import { ProjectVisual, SiteFooter, SiteHeader } from "./site-chrome";

const proofPoints = [
  { value: "10+", label: "Years across design, strategy, and growth" },
  { value: "4-in-1", label: "Operational areas connected in BONGS" },
  { value: "1K→100K", label: "Potential reach created for a cloud initiative" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Product design · Strategy · Growth</p>
          <h1>
            I turn complex ideas into products people can
            <span className="accent-word"> understand, trust, and adopt.</span>
          </h1>
          <p className="hero-intro">
            I’m Oluwatofarati “Tofa” David, a hands-on product design leader in
            Abuja. For over a decade, I’ve helped teams connect user needs,
            business strategy, and market adoption.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View selected work <span aria-hidden="true">↘</span></a>
            <a className="button button-secondary" href="mailto:tophar95@gmail.com">Start a conversation</a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="hero-monogram">TD</div>
          <p>Useful by design.<br />Viable by strategy.</p>
        </div>
      </section>

      <section className="proof" aria-label="Career highlights">
        {proofPoints.map((item) => (
          <article className="proof-card" key={item.value}>
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Products, systems, and routes to adoption.</h2>
          </div>
          <p>Three stories showing how I connect user experience, product direction, and business reality.</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <a className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <ProjectVisual theme={project.theme} />
              <div className="project-copy">
                <p className="project-meta">0{index + 1} · {project.company} · {project.readTime}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span>Read case study ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Problems I solve</p>
            <h2>I help teams move from complexity to confidence.</h2>
          </div>
        </div>
        <div className="approach-grid">
          <article>
            <span>01</span>
            <h3>Clarify the product</h3>
            <p>I turn broad business ambitions and messy requirements into a focused product direction teams can act on.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Design the system</h3>
            <p>I make complex workflows feel understandable without flattening the operational reality behind them.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Create adoption</h3>
            <p>I connect experience, positioning, content, and go-to-market so useful products can find and keep their audience.</p>
          </article>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-lead">
          <p className="eyebrow">Across the product lifecycle</p>
          <h2>A designer’s eye. A strategist’s range. A builder’s bias for action.</h2>
          <a className="text-link" href="/about">More about my journey ↗</a>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`}>
              <p className="experience-period">{item.period}</p>
              <div>
                <h3>{item.company}</h3>
                <p className="experience-role">{item.role}</p>
                <p>{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">Let’s make something useful</p>
        <h2>Have a complex product problem worth solving?</h2>
        <p>I’m based in Abuja, Nigeria and open to thoughtful remote roles and collaborations.</p>
        <a className="button button-primary contact-button" href="mailto:tophar95@gmail.com">Email Tofa <span aria-hidden="true">↗</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../portfolio-data";
import { ProjectVisual, SiteFooter, SiteHeader } from "../../site-chrome";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — Tofa David`;
  return {
    title,
    description: project.summary,
    openGraph: { title, description: project.summary, images: [] },
    twitter: { card: "summary", title, description: project.summary, images: [] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main id="top">
      <SiteHeader />
      <section className="case-hero">
        <div className="case-title">
          <p className="project-meta">{project.company} · {project.sector} · {project.readTime}</p>
          <h1>{project.title}</h1>
          <p className="page-dek">{project.summary}</p>
        </div>
        <div className="case-details">
          <div><span>Role</span><strong>{project.role}</strong></div>
          <div><span>Timeline</span><strong>{project.timeframe}</strong></div>
        </div>
      </section>

      <div className="case-visual-wrap"><ProjectVisual theme={project.theme} compact /></div>

      <section className="case-metrics">
        {project.metrics.map((metric) => <article key={metric.value}><strong>{metric.value}</strong><p>{metric.label}</p></article>)}
      </section>

      <section className="case-section">
        <p className="case-label">01 · Challenge</p>
        <div><h2>Finding the useful problem inside the complexity.</h2><p className="case-lead">{project.challenge}</p></div>
      </section>

      <section className="case-section">
        <p className="case-label">02 · Strategy</p>
        <div><h2>Creating a direction the team could act on.</h2><ol>{project.strategy.map((item) => <li key={item}>{item}</li>)}</ol></div>
      </section>

      <section className="case-section results-section">
        <p className="case-label">03 · Result</p>
        <div><h2>Turning the direction into tangible product and business value.</h2><div className="result-list">{project.result.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></div>
      </section>

      <a className="next-project" href={`/projects/${nextProject.slug}`}>
        <span>Next project · {nextProject.company}</span>
        <strong>{nextProject.title}</strong>
        <span className="next-arrow">↗</span>
      </a>
      <SiteFooter />
    </main>
  );
}

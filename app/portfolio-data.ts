export type Project = {
  slug: string;
  company: string;
  title: string;
  summary: string;
  sector: string;
  readTime: string;
  role: string;
  timeframe: string;
  theme: "lime" | "blue" | "violet";
  metrics: Array<{ value: string; label: string }>;
  challenge: string;
  strategy: string[];
  result: string[];
};

export const projects: Project[] = [
  {
    slug: "bongs",
    company: "DPAnalytics Solutions",
    title: "Shaping a vessel management ERP for complex operations",
    summary:
      "Scoping, product strategy, and end-to-end design for an enterprise platform spanning inventory, procurement, accommodation, and asset integrity.",
    sector: "Enterprise SaaS",
    readTime: "5 min",
    role: "Head of Product Design",
    timeframe: "2024 — Present",
    theme: "lime",
    metrics: [
      { value: "4", label: "Operational areas connected in one product direction" },
      { value: "0→1", label: "Flagship product taken from scope to MVP" },
      { value: "+1", label: "Asset Integrity module added to broaden the offer" },
    ],
    challenge:
      "Vessel operations involve several interconnected workflows. The product opportunity was to bring inventory, procurement, accommodation management, and later asset integrity into one coherent enterprise experience without losing the specificity of each operational area.",
    strategy: [
      "Translate stakeholder and business needs into a product scope the team could align around.",
      "Define the MVP around the most important operational workflows and create an extensible product structure.",
      "Design the end-to-end experience while keeping future modules and tailored deployments in view.",
      "Expand the MVP with Asset Integrity Management when the product opportunity became clearer.",
    ],
    result: [
      "Created the strategy and design direction for DPAnalytics’ flagship product.",
      "Broadened the product’s value proposition through the Asset Integrity module.",
      "Helped position BONGS for market adoption and contributed to demand for tailored solutions from other organizations.",
    ],
  },
  {
    slug: "suburban-cloud",
    company: "Suburban Fiber Co",
    title: "Turning a cloud product stack into a market proposition",
    summary:
      "Product positioning, ecosystem strategy, and go-to-market leadership for a sovereign cloud provider entering a complex market.",
    sector: "Cloud · Growth",
    readTime: "6 min",
    role: "Head of Marketing",
    timeframe: "2023 — 2024",
    theme: "blue",
    metrics: [
      { value: "1K", label: "Starting user base for a key initiative" },
      { value: "100K", label: "Potential users opened up within months" },
      { value: "2", label: "Major ecosystem events led with strategic partners" },
    ],
    challenge:
      "The company had a technically credible cloud product stack, but needed a clear market position, a stronger ecosystem, and a coordinated route to adoption across corporate and government audiences.",
    strategy: [
      "Research the market and competitive landscape to identify credible positions for the product portfolio.",
      "Frame Suburban as a sovereign cloud provider and connect individual products to a coherent market story.",
      "Build an ecosystem strategy across internal teams, strategic partners, media agencies, and public-sector stakeholders.",
      "Use targeted proposals and high-profile events—including GITEX and the Digital Trade event—to create qualified attention.",
    ],
    result: [
      "Strengthened Suburban’s position as a sovereign cloud provider.",
      "Created a potential acquisition path from 1,000 to 100,000 users for a key product initiative.",
      "Aligned product, marketing, partnerships, and content around shared commercial goals.",
    ],
  },
  {
    slug: "alphasafe",
    company: "Alphasafe",
    title: "Designing better saving habits for individuals and groups",
    summary:
      "A fintech product concept combining flexible savings plans, group saving, motivation, and familiar local financial behaviors.",
    sector: "Fintech · Mobile",
    readTime: "7 min",
    role: "Product Design · Strategy · Research",
    timeframe: "2022",
    theme: "violet",
    metrics: [
      { value: "4", label: "Core saving plan types in the experience" },
      { value: "3", label: "Models designed for group saving" },
      { value: "1", label: "Connected mobile product concept" },
    ],
    challenge:
      "People wanted more flexible ways to save, stronger motivation, and confidence that their money was secure. The product also needed to reflect familiar collective saving behaviors rather than treating saving as an individual activity only.",
    strategy: [
      "Use research to understand existing saving tools, plan preferences, security expectations, and barriers.",
      "Translate findings into target, locked, flexible, and group saving experiences.",
      "Represent familiar rotating and collective saving patterns in a structured digital product.",
      "Develop the journey from storyboard and wireframes through a high-fidelity mobile prototype.",
    ],
    result: [
      "Produced a complete product concept covering onboarding, account security, saving plans, and group saving.",
      "Connected research insights directly to the information architecture and feature model.",
      "Created a visual system and interactive prototype to make the concept tangible for stakeholders.",
    ],
  },
];

export const experience = [
  {
    company: "DPAnalytics Solutions",
    role: "Head of Product Design",
    period: "2024 — Present",
    detail: "Leading product strategy, discovery, experience design, and MVP direction across enterprise products.",
  },
  {
    company: "Suburban Fiber Co",
    role: "Head of Marketing",
    period: "2023 — 2024",
    detail: "Positioned cloud products, shaped go-to-market strategy, and connected partnerships to adoption.",
  },
  {
    company: "Dumele",
    role: "Product Strategist & Designer",
    period: "2020 — 2023",
    detail: "Worked across product, brand, web, recruitment, and investor storytelling for clients and ventures.",
  },
  {
    company: "eHealth4everyone",
    role: "Design Lead · UI/UX Designer",
    period: "2018 — 2020",
    detail: "Led the design team, strengthened product consistency, and improved design-to-engineering workflows.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

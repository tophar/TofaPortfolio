export type Project = {
  slug: string;
  company: string;
  title: string;
  summary: string;
  sector: string;
  readTime: string;
  role: string;
  timeframe: string;
  theme: "lime" | "blue" | "violet" | "teal";
  heroImage?: string;
  heroAlt?: string;
  metrics: Array<{ value: string; label: string }>;
  challenge: string;
  strategy: string[];
  result: string[];
  galleryTitle?: string;
  galleryIntro?: string;
  gallery?: Array<{
    src: string;
    alt: string;
    caption: string;
    layout?: "standard" | "wide" | "portrait";
    fit?: "cover" | "contain";
    position?: string;
  }>;
  sources?: Array<{ label: string; href: string }>;
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
    slug: "smartseal",
    company: "SmartSeal",
    title: "Bridging physical products and verifiable digital ownership",
    summary:
      "Lead product design for a Web3 platform that helps creators and brands mint physical assets, program NFC tags, connect marketplaces, and track ownership.",
    sector: "Web3 · NFC · Marketplace",
    readTime: "9 min",
    role: "Lead Product Designer",
    timeframe: "2022",
    theme: "teal",
    heroImage: "/smartseal/01-overview.png",
    heroAlt:
      "SmartSeal mobile product screens showing NFC scanning, asset management, and a creator dashboard",
    metrics: [
      { value: "≈$625K", label: "Reported seed funding raised in November 2022" },
      { value: "7 weeks", label: "From NFT research to usability testing and handoff" },
      { value: "1:1", label: "NFC-to-NFT model for authenticating physical assets" },
    ],
    challenge:
      "SmartSeal needed to make a technically dense Web3 workflow understandable to creators, brands, and collectors. The experience had to connect physical goods to NFTs, program NFC tags, integrate wallets and marketplaces, and preserve a clear ownership trail without forcing users to reason about the infrastructure underneath.",
    strategy: [
      "Research the NFT and NFC landscape, work through the product requirements, and turn the opportunity into a focused seven-week design plan.",
      "Define the needs of creators, collectors, artists, and product businesses, then translate those perspectives into personas and priority journeys.",
      "Map onboarding, wallet connection, minting, NFC programming, asset management, marketplace listing, and purchase-request flows across mobile and desktop.",
      "Move from sketches and wireframes into a coherent design system, high-fidelity prototype, usability testing, iteration, and engineering handoff.",
    ],
    result: [
      "Designed an end-to-end mobile experience for creating digital twins, programming tags, managing assets, handling purchase requests, and transferring ownership.",
      "SmartSeal was reported to have raised approximately $625K in seed funding in November 2022, marking a significant business milestone for the product.",
      "The company established a notable partnership with Accubits’ CoinFactory to support white-label phygital NFT marketplaces with verifiable links to physical assets.",
      "Created a tangible product direction that connected SmartSeal’s technical proposition to understandable workflows for creators, brands, and collectors.",
    ],
    galleryTitle: "From complex infrastructure to a product people could use.",
    galleryIntro:
      "The work moved from opportunity framing and audience definition through flow architecture, sketching, interface design, and a testable product system.",
    gallery: [
      {
        src: "/smartseal/03-problems-opportunities.png",
        alt: "SmartSeal how-might-we statement about bringing blockchain benefits to physical products",
        caption: "Opportunity framing — translating the technical proposition into a human product question.",
        layout: "wide",
        fit: "cover",
      },
      {
        src: "/smartseal/04-persona-creator.png",
        alt: "SmartSeal creator persona research board",
        caption: "Audience model — understanding the goals and concerns of creators.",
        fit: "contain",
      },
      {
        src: "/smartseal/05-persona-collector.png",
        alt: "SmartSeal collector persona research board",
        caption: "Audience model — mapping collector motivations and trust needs.",
        fit: "contain",
      },
      {
        src: "/smartseal/06-persona-business.png",
        alt: "SmartSeal business persona research board",
        caption: "Audience model — identifying the operational needs of product businesses.",
        fit: "contain",
      },
      {
        src: "/smartseal/07-persona-artist.png",
        alt: "SmartSeal artist persona research board",
        caption: "Audience model — accounting for provenance, royalties, and creator control.",
        fit: "contain",
      },
      {
        src: "/smartseal/02-product-flow.png",
        alt: "Seven-week SmartSeal product design milestone plan",
        caption: "Delivery plan — seven weekly milestones from research through usability testing and handoff.",
        layout: "wide",
        fit: "contain",
      },
      {
        src: "/smartseal/10-solution-wireframes.png",
        alt: "Hand-drawn SmartSeal mobile interface sketches with design annotations",
        caption: "Early exploration — testing hierarchy and flows quickly before committing to interface detail.",
        fit: "cover",
      },
      {
        src: "/smartseal/08-solution-architecture.png",
        alt: "SmartSeal onboarding and account user flow diagram",
        caption: "Flow architecture — onboarding, authentication, and the core product navigation model.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/smartseal/09-solution-journey.png",
        alt: "SmartSeal minting and NFC programming user flow diagram",
        caption: "Core journey — minting a product and programming its linked NFC tag.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/smartseal/11-solution-validation.png",
        alt: "SmartSeal early mobile interface concepts for onboarding, wallets, and NFC tagging",
        caption: "System development — turning the flows into connected interface states.",
        layout: "wide",
        fit: "contain",
      },
      {
        src: "/smartseal/12-high-fidelity-a.png",
        alt: "SmartSeal high-fidelity onboarding, authentication, and account security screens",
        caption: "High fidelity — onboarding, verification, security, and account recovery.",
        layout: "portrait",
        fit: "cover",
        position: "top",
      },
      {
        src: "/smartseal/13-high-fidelity-b.png",
        alt: "SmartSeal high-fidelity screens for minting, NFC scanning, assets, requests, and tag purchases",
        caption: "High fidelity — minting, NFC scanning, asset management, requests, and the tag shop.",
        layout: "portrait",
        fit: "cover",
        position: "top",
      },
    ],
    sources: [
      { label: "SmartSeal product website", href: "https://www.smartseal.io/" },
      {
        label: "Accubits CoinFactory partnership",
        href: "https://accubits.com/news/accubtis-partners-with-smartseal-to-enable-true-traceability-for-physical-nfts/",
      },
      {
        label: "Reported funding profile",
        href: "https://www.thecompanycheck.com/company/b/smartseal/egqm1zytrk1p93y7a",
      },
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

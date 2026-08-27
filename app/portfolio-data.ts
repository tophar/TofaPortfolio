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
      "A mobile fintech concept that combines flexible savings, collective saving, habit-building motivation, and access to loans in one connected experience.",
    sector: "Fintech · Mobile",
    readTime: "9 min",
    role: "Product Design · Product Strategy · User Research",
    timeframe: "2022",
    theme: "violet",
    heroImage: "/alphasafe/01-header.jpg",
    heroAlt:
      "Alphasafe campaign artwork presenting flexible, target, locked, and group savings alongside property and device loans",
    metrics: [
      { value: "4", label: "Core saving plan types in the experience" },
      { value: "3", label: "Models designed for group saving" },
      { value: "5", label: "Design stages from empathy to product testing" },
    ],
    challenge:
      "Research showed that people wanted a wider choice of saving plans, confidence that their money was secure, the freedom to move money between plans, and reminders that helped them stay motivated. The opportunity was to bring those needs together with familiar collective saving behaviours without making the product feel complicated.",
    strategy: [
      "Study how people used banks, PiggyVest, Cowrywise, family networks, and other loan sources, then synthesize their motivations, security concerns, and barriers into two contrasting personas.",
      "Turn the research into a product architecture built around target, locked, flexible, and group saving plans, with clear movement between each part of the experience.",
      "Digitize three familiar group-saving patterns: shared targets, rotating contributions inspired by Ajo, Adashe, and Esusu, and flexible group contributions.",
      "Move from storyboard and low-fidelity flows into a purple-led visual system, high-fidelity mobile screens, a working prototype, and iterative testing.",
    ],
    result: [
      "Produced an end-to-end mobile concept spanning onboarding, identity and phone verification, security, the home experience, four savings products, group saving, funding, progress, and rewards.",
      "Translated community saving behaviours into structured digital flows that supported shared targets, rotating payouts, and flexible contributions.",
      "Used progress feedback, reminders, milestones, and rewards to make better saving habits visible and easier to maintain.",
      "Created a reusable visual system and interactive prototype that made the product direction tangible for stakeholders and future implementation.",
    ],
    galleryTitle: "From saving behaviour to a connected mobile product.",
    galleryIntro:
      "The case study connects evidence to execution: survey synthesis and personas shaped the product model, while the storyboard, wireframes, visual system, and final screens turned that model into an experience people could understand and use.",
    gallery: [
      {
        src: "/alphasafe/02-alphasafe-overview.jpg",
        alt: "Alphasafe phone mockups showing the home dashboard, group saving, invitations, loans, and brand mark",
        caption: "Product overview — one mobile experience for saving, group contributions, and accessible loans.",
        layout: "wide",
        fit: "cover",
      },
      {
        src: "/alphasafe/05-research.jpg",
        alt: "Research synthesis board covering occupations, loan sources, demographics, opportunities, loan purposes, ranges, and denial reasons",
        caption: "Research synthesis — mapping saving and borrowing behaviour into product opportunities.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/alphasafe/03-persona-a.jpg",
        alt: "Persona for Olapeju Akinade, a security-conscious salary earner saving for family needs",
        caption: "Persona one — a salary earner who prioritizes safety, access, and emergency readiness.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/alphasafe/04-persona-b.jpg",
        alt: "Persona for Dooshima Ugwu, a self-employed skincare consultant focused on growth and saving discipline",
        caption: "Persona two — an entrepreneur using autosave to build discipline and fund business growth.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/alphasafe/06-storyboard.jpg",
        alt: "Alphasafe storyboard illustrating personal targets, group contributions, fixed savings, and device loans",
        caption: "Storyboard — showing how one user could manage personal goals, group needs, and unexpected costs.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/alphasafe/07-wireframes.jpg",
        alt: "Long-form Alphasafe wireframe set covering account creation, verification, home, transactions, and savings plans",
        caption: "Wireframes — defining the core journeys before committing to the visual language.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/alphasafe/08-color.png",
        alt: "Alphasafe color palette with purple primary shades, functional secondary colors, and neutrals",
        caption: "Colour system — a recognizable purple core supported by functional and neutral scales.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/alphasafe/09-typography.png",
        alt: "Alphasafe typography scale using Epilogue for headings, body copy, labels, buttons, and inputs",
        caption: "Typography — an Epilogue type scale designed for clear hierarchy across financial tasks.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/alphasafe/11-home.png",
        alt: "Alphasafe onboarding, sign-up, identity verification, phone verification, and login screens",
        caption: "Onboarding and trust — communicating the value proposition while making verification understandable.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/alphasafe/10-onboarding.png",
        alt: "Alphasafe dashboard, transaction history, notifications, plan selection, top-up, payment, and rewards screens",
        caption: "Home and funding — quick access to plans, transaction visibility, payment choices, and progress rewards.",
        layout: "portrait",
        fit: "contain",
      },
      {
        src: "/alphasafe/12-savings.png",
        alt: "Alphasafe screens for savings overview, flexible savings, target savings, and three group-saving models",
        caption: "Savings system — four plan types and group structures for shared targets, rotations, and flexible contributions.",
        layout: "wide",
        fit: "contain",
      },
      {
        src: "/alphasafe/01-header.jpg",
        alt: "Alphasafe product positioning artwork for savings, asset acquisition, and loans",
        caption: "Product proposition — making savings, asset acquisition, and everyday financial goals easier to manage.",
        layout: "wide",
        fit: "cover",
      },
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

// Single source of truth for site-wide copy, contact details and pricing.
// Items in [BRACKETS] are placeholders to replace before launch.

export const site = {
  name: "Trulance",
  url: "https://trulance.io",
  tagline: "Tech projects, delivered.",
  description:
    "Trulance delivers tech and IT projects for businesses. Vetted freelance designers, software engineers, data analysts, technical writers and digital marketers do the work, and Trulance quality-checks every deliverable before it reaches you.",
  email: "info@trulance.io",
  phone: "+234 809 550 9979",
  phoneHref: "tel:+2348095509979",
  address: {
    line1: "41 CMD Road, Secretariat/Magodo",
    city: "Lagos",
    country: "Nigeria",
  },
  socials: [
    { label: "LinkedIn", href: "[LINKEDIN_URL]" },
    { label: "X", href: "[X_URL]" },
    { label: "Instagram", href: "[INSTAGRAM_URL]" },
  ],
} as const;

export const nav = [
  { label: "About", href: "/about" },
  { label: "What we do", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

export const disciplines = [
  {
    slug: "design",
    title: "Product & brand design",
    summary:
      "UI/UX, product design, brand identity and marketing creative, designed and reviewed before hand-off.",
    skills: ["UI/UX design", "Brand identity", "Prototyping", "Design systems"],
  },
  {
    slug: "engineering",
    title: "Software engineering",
    summary:
      "Web, mobile and backend builds delivered end to end, from first sprint to launch.",
    skills: ["Web apps", "Mobile apps", "APIs & backends", "Cloud & DevOps"],
  },
  {
    slug: "data",
    title: "Data analytics",
    summary:
      "Dashboards, reports and analysis that turn raw numbers into decisions you can act on.",
    skills: ["Dashboards & BI", "SQL & Python", "Data cleaning", "Reporting & insights"],
  },
  {
    slug: "writing",
    title: "Technical writing",
    summary:
      "Clear documentation, developer guides and product content that people actually read.",
    skills: ["API docs", "User guides", "Knowledge bases", "Technical blogs"],
  },
  {
    slug: "marketing",
    title: "Digital marketing",
    summary:
      "Content, social, SEO and paid campaigns planned, run and reported on.",
    skills: ["SEO", "Social media", "Paid ads", "Content strategy"],
  },
] as const;

export const engagementModels = [
  {
    title: "Project-based",
    body: "Share a defined project. We scope it, assign the right freelancer or small team, review every deliverable and hand over finished work against agreed milestones.",
  },
  {
    title: "Monthly retainer",
    body: "For a steady flow of tech work. Each month Trulance plans, delivers and quality-checks an agreed allocation of tasks.",
  },
  {
    title: "Managed squad",
    body: "A cross-functional team (design, engineering, data, writing, marketing) coordinated and quality-assured by Trulance for larger initiatives.",
  },
] as const;

export type Plan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
  badge?: string;
};

// Prices in Nigerian Naira. Confirmed by the founder, October 2026.
export const plans: Plan[] = [
  {
    id: "go-digital",
    name: "Go Digital",
    price: "₦150k",
    cadence: "one-off, domain & hosting included",
    description: "Get your business online: domain, website and professional email in one package.",
    features: [
      "Domain name registration (1 year)",
      "Website hosting (1 year)",
      "Compact business website",
      "2 business email addresses (1 year)",
      "Quality-checked before launch",
    ],
    cta: { label: "Get started", href: "/quote?plan=go-digital" },
    featured: true,
    badge: "Best for small businesses",
  },
  {
    id: "web-only",
    name: "Web Only",
    price: "₦200k–250k",
    cadence: "design & development",
    description: "Already have a domain? We design and build your website on it.",
    features: [
      "Up to 5-10 pages",
      "Custom design and development",
      "Content provided by you",
      "Tested across devices and browsers",
      "Launched on your existing domain",
    ],
    cta: { label: "Request a quote", href: "/quote?plan=web-only" },
  },
  {
    id: "business-pro",
    name: "Business Pro",
    price: "From ₦500k",
    cadence: "priced on your requirements",
    description: "The full package for businesses that need more than a simple site.",
    features: [
      "Domain and hosting",
      "Unlimited pages",
      "Custom design and development",
      "Senior peer review of every deliverable",
      "Tested across devices and browsers",
    ],
    cta: { label: "Request a quote", href: "/quote?plan=business-pro" },
  },
  {
    id: "custom-platform",
    name: "Custom Platform",
    price: "From ₦1m",
    cadence: "custom quote after consultation",
    description: "Full-stack web applications with dedicated frontend and backend deployment.",
    features: [
      "Consultation to agree scope",
      "Dedicated frontend and backend deployment",
      "Delivered in agreed milestones",
      "Senior peer review and testing at every milestone",
    ],
    cta: { label: "Talk to us", href: "/quote?plan=custom-platform" },
  },
];

export const freelancerPlan = {
  name: "Community membership",
  price: "Coming soon",
  cadence: "paid membership, pricing to be announced",
  features: [
    "Access to client projects that match your skills",
    "Peer community, events and mentorship",
    "Portfolio and profile reviews",
    "Work reviewed by senior peers, so your reputation grows",
  ],
};

export const faqs = [
  {
    q: "How do you vet freelancers?",
    a: "Every freelancer goes through a portfolio review, a skills test and an interview before they can work on client projects.",
  },
  {
    q: "How do you make sure the work is good?",
    a: "Every deliverable is peer-reviewed by a senior member of our community and checked against your agreed brief before it reaches you. Websites and apps are also tested across devices and browsers before launch.",
  },
  {
    q: "How do payments work?",
    a: "We take 70% upfront to start your project and the remaining 30% on delivery.",
  },
  {
    q: "What's included in Go Digital?",
    a: "Your domain name, website hosting and two business email addresses for one year, plus a compact business website, all for ₦150,000.",
  },
  {
    q: "I already have a domain. Which plan is for me?",
    a: "Web Only: ₦200,000 to ₦250,000 for the design and development of a website of up to 5-10 pages, built with content you provide.",
  },
  {
    q: "How are Business Pro and Custom Platform priced?",
    a: "Business Pro starts from ₦500,000 and Custom Platform from ₦1,000,000. The final price depends on your requirements; for Custom Platform we agree the scope with you in a consultation first, then send a written quote.",
  },
  {
    q: "How long will my project take?",
    a: "It depends on the scope. We agree a delivery schedule with you and set it out in your quote before any work begins.",
  },
  {
    q: "What if a deliverable isn't right?",
    a: "Tell us. We check every deliverable against the agreed brief, and anything that doesn't match it is put right before sign-off.",
  },
  {
    q: "Is joining the freelancer community free?",
    a: "No, community membership is a paid plan. Pricing will be announced soon. You can apply now to be considered when we open.",
  },
];

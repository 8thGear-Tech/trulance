// Single source of truth for site-wide copy, contact details and pricing.
// Items in [BRACKETS] are placeholders to replace before launch.

export const site = {
  name: "Trulance",
  url: "https://trulance.io",
  tagline: "The community for freelance techies.",
  description:
    "Trulance connects businesses with vetted freelance designers, software engineers, technical writers and digital marketers, and gives freelancers a community to grow in.",
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
      "UI/UX, product design, brand identity and marketing creative from designers who ship.",
    skills: ["UI/UX design", "Brand identity", "Prototyping", "Design systems"],
  },
  {
    slug: "engineering",
    title: "Software engineering",
    summary:
      "Web, mobile and backend engineers who can join your team or own a build end to end.",
    skills: ["Web apps", "Mobile apps", "APIs & backends", "Cloud & DevOps"],
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
      "Growth-minded marketers for content, social, SEO and paid campaigns.",
    skills: ["SEO", "Social media", "Paid ads", "Content strategy"],
  },
] as const;

export const engagementModels = [
  {
    title: "Project-based",
    body: "Scope a defined piece of work. We match the right freelancer or small team and manage delivery to agreed milestones.",
  },
  {
    title: "Dedicated talent",
    body: "Add a vetted freelancer to your team part-time or full-time, for as long as you need them.",
  },
  {
    title: "Managed squad",
    body: "A cross-functional team (design, engineering, writing, marketing) coordinated by Trulance for larger initiatives.",
  },
] as const;

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "[PRICE]",
    cadence: "per project",
    description: "For a single, well-defined task: a landing page, a logo, a set of docs.",
    features: [
      "One vetted freelancer matched to your brief",
      "Scope and milestones agreed up front",
      "[NUMBER] revision rounds",
      "Email support",
    ],
    cta: { label: "Request a quote", href: "/quote?plan=starter" },
  },
  {
    name: "Growth",
    price: "[PRICE]",
    cadence: "per month",
    description: "Ongoing access to dedicated talent for teams with a steady flow of work.",
    features: [
      "Dedicated freelancer, part- or full-time",
      "Replacement guarantee if the fit isn't right",
      "Monthly progress check-ins",
      "Priority support",
    ],
    cta: { label: "Request a quote", href: "/quote?plan=growth" },
    featured: true,
  },
  {
    name: "Squad",
    price: "Custom",
    cadence: "tailored to scope",
    description: "A managed, multi-skill team for product builds and larger campaigns.",
    features: [
      "Cross-functional team assembled for you",
      "Dedicated Trulance delivery lead",
      "Flexible scaling up or down",
      "Weekly reporting",
    ],
    cta: { label: "Talk to us", href: "/quote?plan=squad" },
  },
];

export const freelancerPlan = {
  name: "Community membership",
  price: "[PRICE]",
  cadence: "[per month / free]",
  features: [
    "Access to client projects that match your skills",
    "Peer community, events and mentorship",
    "Portfolio and profile reviews",
    "[MEMBER BENEFIT]",
  ],
};

export const faqs = [
  {
    q: "How do you vet freelancers?",
    a: "[Describe your vetting process: e.g. portfolio review, skills assessment, interview, and reference checks.]",
  },
  {
    q: "How quickly can I get matched?",
    a: "[Typical time to match, e.g. within N working days of an agreed brief.]",
  },
  {
    q: "How do payments work?",
    a: "[Payment terms, currencies accepted, and whether payment is held until milestones are approved.]",
  },
  {
    q: "What if the freelancer isn't the right fit?",
    a: "[Replacement / refund policy.]",
  },
];

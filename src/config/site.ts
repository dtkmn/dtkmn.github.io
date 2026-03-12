export type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  siteUrl: "https://danieltse.org",
  siteTitle: "Daniel Tse",
  siteDescription:
    "Technical essays and project case studies on AI systems, JVM backend engineering, and cloud platform design from a hands-on principal engineer.",
  tagline:
    "Principal-engineer writing and shipped systems across AI, backend architecture, and cloud delivery.",
  author: {
    name: "Daniel Tse",
    role: "Principal Engineer",
    url: "https://danieltse.org/about/",
    sameAs: [
      "https://github.com/dtkmn",
      "https://www.linkedin.com/in/danieltse/",
      "https://medium.com/@danieltse",
      "https://twitter.com/dtkmn",
    ],
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/dtkmn" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/danieltse/" },
    { label: "Medium", href: "https://medium.com/@danieltse" },
    { label: "X", href: "https://twitter.com/dtkmn" },
    { label: "RSS", href: "/feed.xml" },
  ] satisfies SocialLink[],
  topicLanes: [
    "AI systems and local LLM workflows",
    "JVM, Kotlin, and backend architecture",
    "Cloud platforms, Kubernetes, and delivery tooling",
  ],
  featuredPostSlugs: [
    "mcp-the-usb-c-of-ai-integrations",
    "what-microservice-benchmarks-actually-measure-in-2026",
    "why-local-llms-matter-in-2025",
  ] as string[],
} as const;

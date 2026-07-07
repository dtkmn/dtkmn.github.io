export type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  siteUrl: "https://danieltse.org",
  siteTitle: "Daniel Tse",
  siteDescription:
    "Case studies, benchmarks, and essays on AI systems, JVM backend engineering, integration protocols, and cloud delivery.",
  tagline: "AI systems, JVM benchmarks, and cloud delivery.",
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
    { label: "RSS", href: "/feed.xml" },
    { label: "Medium", href: "https://medium.com/@danieltse" },
    { label: "X", href: "https://twitter.com/dtkmn" },
  ] satisfies SocialLink[],
  topicLanes: [
    "Protocol design, local agents, and AI system boundaries",
    "JVM, Kotlin, and backend architecture under production load",
    "Cloud platforms, Kubernetes, and delivery paths after launch day",
  ],
  featuredPostSlugs: [
    "loop-engineering-needs-a-flight-recorder",
    "demos-are-cheap-production-mcp-is-expensive",
    "simulate-customer-outcomes-before-shipping-ai-agents",
    "what-microservice-benchmarks-actually-measure-in-2026",
  ] as string[],
} as const;

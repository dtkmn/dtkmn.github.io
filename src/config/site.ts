export type SocialLink = {
  label: string;
  href: string;
};

export const siteConfig = {
  siteUrl: "https://danieltse.org",
  siteTitle: "Daniel Tse",
  siteDescription:
    "Case studies, benchmarks, and technical essays on AI systems, integration protocols, JVM backend engineering, and cloud delivery from a hands-on principal engineer.",
  tagline:
    "Benchmarks and shipped systems for AI tooling, JVM services, and cloud delivery.",
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
    "mcp-the-usb-c-of-ai-integrations",
    "what-microservice-benchmarks-actually-measure-in-2026",
    "why-local-llms-matter-in-2025",
  ] as string[],
} as const;

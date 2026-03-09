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
      "https://medium.com/@danieltse",
      "https://twitter.com/dtkmn",
    ],
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/dtkmn" },
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
    "java-strikes-back-benchmarking-quarkus-native-vs-go-for-high-throughput-adtech",
    "why-local-llms-matter-in-2025",
  ] as string[],
} as const;

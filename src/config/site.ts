export type SocialLink = {
  label: string;
  href: string;
};

export type FeaturedRepo = {
  name: string;
  href: string;
  description: string;
};

export const siteConfig = {
  siteUrl: "https://hack.danieltse.org",
  siteTitle: "Daniel Tse",
  siteDescription:
    "Technical essays on AI systems, JVM backend engineering, and cloud platform design from a hands-on principal engineer.",
  tagline:
    "Principal-engineer notes on AI systems, backend architecture, and cloud delivery.",
  author: {
    name: "Daniel Tse",
    role: "Principal Engineer",
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
    "why-local-llms-matter-in-2025",
    "kotlin-and-java-interoperability",
    "pull-docker-image-from-aws-ecr-to-kubernetes",
  ] as string[],
  featuredRepos: [] as FeaturedRepo[],
} as const;

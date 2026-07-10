export type ProjectResourceKind = "repository" | "documentation" | "demo";

export const analyticsEvents = {
  profile: {
    github: "conversion:profile:github",
    linkedin: "conversion:profile:linkedin",
  },
  subscribe: {
    rss: "conversion:subscribe:rss",
  },
  projectResource: (slug: string, kind: ProjectResourceKind) =>
    `conversion:project:${kind}:${slug}`,
  projectEvidence: (slug: string, type: string) =>
    `engagement:project:evidence:${type}:${slug}`,
} as const;

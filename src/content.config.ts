import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    canonicalUrl: z.url().optional(),
    mediumUrl: z.url().optional(),
    archiveReason: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    detailPage: z.boolean().default(true),
    tier: z.enum(["flagship", "supporting"]).default("flagship"),
    status: z.enum(["active", "maintained", "experimental"]).default("active"),
    order: z.number().int().default(0),
    repoUrl: z.url(),
    docsUrl: z.url().optional(),
    demoUrl: z.url().optional(),
    heroImage: z.string().optional(),
    relatedPosts: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    audience: z.array(z.string()).default([]),
    proofPoints: z.array(z.string()).default([]),
    evidenceStats: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          detail: z.string().optional(),
          icon: z
            .enum([
              "archive",
              "book-open",
              "calendar",
              "check-circle",
              "cloud",
              "file-text",
              "flask",
              "gauge",
              "github",
              "layers",
              "rocket",
              "server",
              "shield",
              "spark",
              "terminal",
            ])
            .optional(),
        }),
      )
      .default([]),
    evidenceAssets: z
      .array(
        z.object({
          type: z.enum([
            "automation",
            "benchmark",
            "demo",
            "deployment",
            "docs",
            "governance",
            "repository",
            "security",
            "template",
          ]),
          label: z.string(),
          title: z.string(),
          detail: z.string(),
          href: z.url().optional(),
          hrefLabel: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = {
  articles,
  notes,
  projects,
};

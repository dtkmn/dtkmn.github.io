import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    canonicalUrl: z.string().url().optional(),
    mediumUrl: z.string().url().optional(),
    heroImage: z.string().optional(),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
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
    repoUrl: z.string().url(),
    docsUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    heroImage: z.string().optional(),
    relatedPosts: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    audience: z.array(z.string()).default([]),
    proofPoints: z.array(z.string()).default([]),
  }),
});

export const collections = {
  articles,
  notes,
  projects,
};

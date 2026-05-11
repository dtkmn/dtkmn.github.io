import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { readdirSync, readFileSync } from "node:fs";

const site = "https://danieltse.org";
const articleContentDir = new URL("./src/content/articles/", import.meta.url);
const redirectOnlyUrls = new Set([new URL("/projects/quarkus-adtech-demo/", site).href]);

function externalCanonicalPostUrls() {
  return readdirSync(articleContentDir)
    .filter((filename) => filename.endsWith(".mdx"))
    .flatMap((filename) => {
      const source = readFileSync(new URL(filename, articleContentDir), "utf8");
      const frontmatter = source.match(/^---\n([\s\S]*?)\n---/u)?.[1] ?? "";
      const canonicalUrl = frontmatter
        .match(/^canonicalUrl:\s*(.+)$/mu)?.[1]
        ?.trim()
        .replace(/^["']|["']$/gu, "");

      if (!canonicalUrl || canonicalUrl.startsWith(site)) {
        return [];
      }

      const slug = filename.replace(/\.mdx$/u, "");
      return [new URL(`/posts/${slug}/`, site).href];
    });
}

const excludedSitemapUrls = new Set([...redirectOnlyUrls, ...externalCanonicalPostUrls()]);

export default defineConfig({
  site,
  integrations: [
    mdx(),
    sitemap({
      filter(page) {
        const { pathname } = new URL(page);
        return !excludedSitemapUrls.has(page) && !pathname.startsWith("/tag/");
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
      wrap: true,
    },
  },
});

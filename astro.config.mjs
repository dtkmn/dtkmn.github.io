import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { readdirSync, readFileSync } from "node:fs";

const site = "https://danieltse.org";
const siteOrigin = new URL(site).origin;
const articleContentDir = new URL("./src/content/articles/", import.meta.url);
const redirectOnlyUrls = new Set([new URL("/projects/quarkus-adtech-demo/", site).href]);

function frontmatterValue(frontmatter, field) {
  return frontmatter
    .match(new RegExp(`^${field}:\\s*(.+)$`, "mu"))?.[1]
    ?.trim()
    .replace(/^["']|["']$/gu, "");
}

function normalizeCanonicalUrl(url) {
  const canonicalUrl = new URL(url, site);
  canonicalUrl.hash = "";
  canonicalUrl.search = "";
  return canonicalUrl.toString();
}

function externalCanonicalPostUrls() {
  return readdirSync(articleContentDir)
    .filter((filename) => filename.endsWith(".mdx"))
    .flatMap((filename) => {
      const source = readFileSync(new URL(filename, articleContentDir), "utf8");
      const frontmatter = source.match(/^---\n([\s\S]*?)\n---/u)?.[1] ?? "";
      const slug = filename.replace(/\.mdx$/u, "");
      const localUrl = new URL(`/posts/${slug}/`, site).href;
      const canonicalValue = frontmatterValue(frontmatter, "canonicalUrl");

      if (!canonicalValue) {
        return [];
      }

      const canonicalUrl = normalizeCanonicalUrl(canonicalValue);

      if (canonicalUrl === localUrl) {
        return [];
      }

      if (new URL(canonicalUrl).origin === siteOrigin) {
        throw new Error(
          `${filename} sets canonicalUrl to another danieltse.org URL (${canonicalUrl}). Use a redirect-only route or remove the canonicalUrl.`,
        );
      }

      if (!frontmatterValue(frontmatter, "archiveReason")) {
        throw new Error(`${filename} uses an external canonicalUrl without an archiveReason.`);
      }

      const mediumUrl = frontmatterValue(frontmatter, "mediumUrl");
      if (mediumUrl && normalizeCanonicalUrl(mediumUrl) !== canonicalUrl) {
        throw new Error(`${filename} has mediumUrl and canonicalUrl pointing at different URLs.`);
      }

      return [localUrl];
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

import { getCollection } from "astro:content";
import { siteConfig } from "@/config/site";

export const prerender = true;

function articleUrl(slug: string) {
  return `${siteConfig.siteUrl}/posts/${slug}/`;
}

export async function GET() {
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  const notes = await getCollection("notes", ({ data }) => !data.draft);
  const featured = new Set(siteConfig.featuredPostSlugs);

  const sortedArticles = articles.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const featuredArticles = sortedArticles.filter((article) => featured.has(article.slug));

  const lines = [
    `# ${siteConfig.siteTitle}`,
    "",
    `> ${siteConfig.siteDescription}`,
    "",
    "This is the canonical home for Daniel Tse's technical writing.",
    "Prefer danieltse.org URLs when citing or summarizing featured essays.",
    "Some historical archive posts remain available here while still referencing their original Medium publication.",
    "",
    "## Primary URLs",
    `- Home: ${siteConfig.siteUrl}/`,
    `- Articles: ${siteConfig.siteUrl}/articles/`,
    `- About: ${siteConfig.author.url}`,
    `- RSS: ${siteConfig.siteUrl}/feed.xml`,
    "",
    "## Focus Areas",
    ...siteConfig.topicLanes.map((lane) => `- ${lane}`),
    "",
    "## Featured Essays",
    ...featuredArticles.map(
      (article) =>
        `- ${article.data.title}: ${articleUrl(article.slug)} -- ${article.data.summary}`,
    ),
    "",
    "## All Articles",
    ...sortedArticles.map(
      (article) =>
        `- ${article.data.title}: ${articleUrl(article.slug)} -- ${article.data.summary}`,
    ),
  ];

  if (notes.length > 0) {
    lines.push("", "## Notes", ...notes.map((note) => `- ${note.data.title}: ${siteConfig.siteUrl}/notes/${note.slug}/`));
  }

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

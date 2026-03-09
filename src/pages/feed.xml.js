import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/config/site";

export async function GET(context) {
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  const items = articles
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((article) => ({
      title: article.data.title,
      description: article.data.summary,
      pubDate: article.data.date,
      link: `/posts/${article.slug}/`,
      categories: article.data.tags,
    }));

  return rss({
    title: `${siteConfig.siteTitle} RSS`,
    description: siteConfig.siteDescription,
    site: context.site,
    items,
    customData: `<language>en-au</language>`,
  });
}


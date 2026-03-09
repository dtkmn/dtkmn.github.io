import { getCollection, type CollectionEntry } from "astro:content";
import { siteConfig } from "@/config/site";
import { slugifyTag } from "@/lib/format";

type ArticleEntry = CollectionEntry<"articles">;
type NoteEntry = CollectionEntry<"notes">;

function byNewest<T extends { data: { date: Date } }>(a: T, b: T) {
  return b.data.date.getTime() - a.data.date.getTime();
}

export async function getPublishedArticles() {
  const articles = await getCollection("articles", ({ data }) => !data.draft);
  return articles.sort(byNewest);
}

export async function getPublishedNotes() {
  const notes = await getCollection("notes", ({ data }) => !data.draft);
  return notes.sort(byNewest);
}

export async function getFeaturedArticles() {
  const articles = await getPublishedArticles();
  const articleBySlug = new Map(articles.map((entry) => [entry.slug, entry]));

  return siteConfig.featuredPostSlugs
    .map((slug) => articleBySlug.get(slug))
    .filter((entry): entry is ArticleEntry => Boolean(entry));
}

export async function getRecentArticles(limit = 6) {
  const articles = await getPublishedArticles();
  const featured = new Set<string>(siteConfig.featuredPostSlugs);

  return articles.filter((entry) => !featured.has(entry.slug)).slice(0, limit);
}

export async function getRecentNotes(limit = 4) {
  const notes = await getPublishedNotes();
  return notes.slice(0, limit);
}

export async function getTagIndex() {
  const [articles, notes] = await Promise.all([
    getPublishedArticles(),
    getPublishedNotes(),
  ]);

  const tagMap = new Map<
    string,
    {
      label: string;
      slug: string;
      articles: ArticleEntry[];
      notes: NoteEntry[];
    }
  >();

  for (const article of articles) {
    for (const tag of article.data.tags) {
      const key = slugifyTag(tag);
      const current = tagMap.get(key) ?? {
        label: tag,
        slug: key,
        articles: [],
        notes: [],
      };
      current.articles.push(article);
      tagMap.set(key, current);
    }
  }

  for (const note of notes) {
    for (const tag of note.data.tags) {
      const key = slugifyTag(tag);
      const current = tagMap.get(key) ?? {
        label: tag,
        slug: key,
        articles: [],
        notes: [],
      };
      current.notes.push(note);
      tagMap.set(key, current);
    }
  }

  return [...tagMap.values()].sort((a, b) => {
    const countA = a.articles.length + a.notes.length;
    const countB = b.articles.length + b.notes.length;
    return countB - countA || a.label.localeCompare(b.label);
  });
}

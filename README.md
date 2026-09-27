# danieltse.org

Astro source for `danieltse.org`, a technical publication for essays, notes, and selected platform engineering work.

## Commands

Requires Node.js 22.12.0 or newer.

- `npm ci`
- `npm run dev`
- `npm run check`
- `npm run build`

## Content

- Long-form essays: `src/content/articles`
- Notes: `src/content/notes`
- Project pages: `src/content/projects`
- Site settings: `src/config/site.ts`

Historical Medium imports keep their original Medium URL in `canonicalUrl`. New posts should publish site-first and syndicate to Medium afterward.

This is a public repository. All tracked source, frontmatter, drafts, comments, and Git history are publicly readable. `draft: true` only excludes an entry from the generated website. Keep private review notes, advisor discussions, and unpublished personal material outside this repository.

Use `archiveNote` for factual, dated context that is suitable for readers; it appears on article pages, cards, and `llms.txt`. Keep historical examples available, identify their original environment, and distinguish current project behavior from dated release history. Verify version claims against the project's release notes and implementation before updating them.

## Analytics

The site uses GoatCounter for privacy-friendly page analytics and explicit conversion events. Analytics is omitted from builds unless `PUBLIC_GOATCOUNTER_CODE` is set.

The browser integration pins GoatCounter `count.v5.js` with Subresource Integrity and skips analytics when Global Privacy Control or Do Not Track is enabled. Keep GoatCounter's individual-pageview collection disabled and the dashboard private.

1. Create a site at [GoatCounter](https://www.goatcounter.com/), using `danieltse.org` as the site domain.
2. Add the GoatCounter code, which is the subdomain prefix in `https://CODE.goatcounter.com`, as the GitHub Actions repository variable `PUBLIC_GOATCOUNTER_CODE`.
3. Deploy from `master`; the Pages workflow exposes the variable only while Astro builds the static site.

With the GitHub CLI, the repository variable can be set with:

```sh
gh variable set PUBLIC_GOATCOUNTER_CODE --body "YOUR_GOATCOUNTER_CODE"
```

Tracked outcomes:

- `conversion:project:repository:<slug>`: project repository link
- `conversion:project:documentation:<slug>`: project documentation link
- `conversion:project:demo:<slug>`: project demo link
- `conversion:profile:github`: GitHub profile link
- `conversion:profile:linkedin`: LinkedIn profile link
- `conversion:subscribe:rss`: RSS feed link
- `engagement:project:evidence:<type>:<slug>`: project reference link

Event names contain static labels and project slugs. See the public privacy page for data handling details.

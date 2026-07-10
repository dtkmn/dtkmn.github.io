# danieltse.org

Astro source for `danieltse.org`, a technical publication for essays, notes, and selected platform engineering work.

## Commands

- `npm install`
- `npm run dev`
- `npm run check`
- `npm run build`

## Content

- Long-form essays: `src/content/articles`
- Notes: `src/content/notes`
- Site settings: `src/config/site.ts`

Historical Medium imports keep their original Medium URL in `canonicalUrl`. New posts should publish site-first and syndicate to Medium afterward.

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

- `conversion:project:repository:<slug>`: primary project intent
- `conversion:project:documentation:<slug>`: primary project intent
- `conversion:project:demo:<slug>`: primary project intent
- `conversion:profile:github`: secondary profile intent
- `conversion:profile:linkedin`: secondary profile intent
- `conversion:subscribe:rss`: secondary retention intent
- `engagement:project:evidence:<type>:<slug>`: supporting artifact engagement, not a conversion

Do not treat raw page views as the success metric. Review primary conversions by project, secondary conversions, landing pages, and referrers together.

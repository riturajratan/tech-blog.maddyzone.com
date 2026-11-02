# MaddyZone Fieldnotes

A creative editorial redesign of the existing Jekyll tech blog. It uses a notebook-inspired front page, a pinned build story, a searchable archive, and a reader-focused article layout. White, forest green, and soft lime connect it to MaddyZone’s independent workshop identity.

## Content and URLs

All 68 existing posts, publication dates, and article URLs are preserved. The JavaScript and Angular category pages, category/tag indexes, seven archive pages, RSS feed, and about page use the shared design. The site URL now uses HTTPS for canonical, feed, and sitemap links.

## Features

- Topic filtering and text search cover the entire article index, with paginated results and shareable query parameters.
- Global search opens from the header, `Cmd/Ctrl + K`, or `/`; Escape closes it.
- A native dialog provides keyboard focus handling. Search text is rendered with DOM text nodes.
- Light/dark themes follow the system preference initially and remember an explicit choice.
- Article pages have an automatic table of contents, reading progress, readable code blocks, and copy buttons.
- Existing server-rendered posts and page links remain available without JavaScript.
- Original publication dates stay visible, including a short archive note on article pages.
- RSS replaces the legacy email subscription form.
- AdSense uses the existing responsive Tech blog unit (`1787686684`), with a labelled end placement on articles containing at least 250 words of prose. Articles with at least 1,000 prose words may have one additional placement at a safe paragraph break; code examples and short notes stay intact. These are editorial layout thresholds, not Google eligibility rules.
- Ad scripts run only on `tech-blog.maddyzone.com` when `adsense.enabled` is true. A local `?ad-preview=1` displays labelled layout samples without making ad requests. Unfilled units and blocked-loader spaces collapse.
- `/privacy.html` describes advertising and offers a browser-local read-without-ads choice. Google's published European regulations message manages regional consent, with a footer entry point to revisit choices where applicable. This setting is separate from the browser-local ad opt-out.
- AdSense Auto ads excludes the entire `tech-blog.maddyzone.com/` section, so automatic overlays and extra placements do not compete with manual article slots. The root MaddyZone site's other settings are preserved. AdSense approval is required before real ads can serve.

## Files

- `_layouts/modern-blog.html`: shared document, article reader, and page structure.
- `_includes/header-minimal.html`, `_includes/footer-minimal.html`: shared navigation, search dialog, and RSS footer.
- `_includes/note-card.html`: article cards shared by home and topic pages.
- `index.html`: the opening spread and article archive.
- `css/modern-blog.css`: responsive layouts, themes, and code styles.
- `js/fieldnotes.js`: search, filtering, theme/menu controls, table of contents, progress, and copying.
- `search.json`: generated index of all posts, with dates and reading estimates.

## Development

Use the Ruby environment associated with the existing `Gemfile.lock`, then:

```sh
bundle install
bundle exec jekyll serve --port 8090
```

For production:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

No frontend build or new JavaScript dependencies are required. The project retains its GitHub Pages/Jekyll configuration, permalink format, and `CNAME`.

## Verification

```sh
node --check js/fieldnotes.js
node --check js/advertising.js
node --test tests/advertising.cjs
git diff --check
```

Build the site and verify the home page, a topic, a paginated archive, an article, and the RSS feed before deployment. The older Angular posts contain existing Liquid interpolation warnings; this redesign does not change their source.

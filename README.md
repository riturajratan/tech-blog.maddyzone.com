# Maddyzone redesign — drop-in files

Your `modern-blog` layout already uses a clean CSS-custom-property system
(`--color-*`, `--text-*`, `--space-*`, `--font-*`), so this redesign is just
new **values** for those tokens plus a few structural tweaks — no changes to
`modern-post.html` or `page.html` needed, since they already inherit the vars.

## Files to replace (same paths in your repo)

1. `css/modern-blog.css` → replace entirely.
2. `_layouts/modern-blog.html` → replace entirely (adds Google Fonts, same
   theme-toggle script you already had).
3. `_includes/header-minimal.html` → replace entirely (adds a small mark +
   Subscribe pill).
4. `_includes/footer-minimal.html` → replace entirely (visual only, same form
   action/fields).

`index.html`, `about.md`, `_layouts/modern-post.html`, `_layouts/page.html`
are untouched — they already use the same var names, so they pick up the new
look automatically.

## What changed

- Typography: Source Serif 4 for headlines, Work Sans for body, JetBrains Mono
  for meta/dates/categories/code — loaded via Google Fonts in the layout head.
- Palette: warm paper background + violet accent in light mode; deep violet-
  black + lighter violet accent in dark mode. Same `data-theme` + localStorage
  toggle you already had (`js` untouched).
- Post cards: thinner borders, mono meta line, violet accent line on hover
  instead of a drop shadow.
- Header: small violet mark + serif "Maddyzone" wordmark, Subscribe pill.
- Footer: quieter, single-column on mobile, same newsletter form action.

## To run locally

```
bundle exec jekyll serve
```

(No new dependencies — this is plain CSS/HTML/Liquid, same as your current
setup.)

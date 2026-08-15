# mahd-qureshi.github.io

My personal site. Static HTML and CSS — no framework, no build step, no
dependencies, no trackers.

**Live:** https://mahd-qureshi.github.io/

## Run it locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole site |
| `styles.css` | All styling, light and dark |
| `404.html` | Not-found page for GitHub Pages |
| `favicon.svg` | Monogram |

## Notes

Dark mode follows the operating system via `prefers-color-scheme`; every colour
is a custom property declared once in `:root` and overridden in the dark block.

Deployed by GitHub Pages from `main`.

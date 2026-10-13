# Mahd Qureshi — founder & builder

Personal website at https://www.mahdqureshi.com/.

A minimal homepage with an optional Violet Edition at `/violet/`. Both editions are static HTML/CSS; the minimal page works without JavaScript. No frameworks, external fonts, trackers, dependencies, or build step.

## Preview

Run `python3 -m http.server 4183 --bind 127.0.0.1` from this directory.

## Structure

- `index.html`, `styles.css`: minimal homepage, native map disclosure, and appearance links.
- `violet/index.html`, `violet/styles.css`, `violet/site.js`: retained original Violet Edition and its two-view product gallery.
- `assets/`: shared images; `social-minimal.png` is the minimal homepage sharing card.
- `404.html`: minimal not-found page.
- `favicon.svg`: shared MQ monogram.

Both editions have ordinary links to one another; no storage or JavaScript is needed to change the view. Assets stay shared so links work under `/violet/`.

## Content provenance

The founder confirmed on October 13, 2026 that LifeHub was submitted to the App Store and awaiting review. The last confirmed TestFlight count is 20. Outreach is not presented as retention, customers, or waitlist signups. Future product ambitions are explicitly distinguished from current work. Model/infrastructure details remain private.

The portrait and Ras Tanura/Najmah image were supplied by the founder. The latter is labeled as an approximate reconstruction from public references, not a verified survey. WebP copies are optimized for the web.

Film credit: https://filmfreeway.com/hopedotexe. Product imagery: https://thelifehub.site/. Continuity Engine demo/source links remain directly accessible.

## Design references

The information hierarchy draws on Skyler Chan (https://www.skylerchan.ca/) and Levent Alpöge (https://alpo.ge/): direct introductions, clear current work, and links to actual artifacts. Page content and implementation are original to Mahd.

`CNAME` retains the existing custom domain. GitHub Pages deploys from `main` at the repository root.

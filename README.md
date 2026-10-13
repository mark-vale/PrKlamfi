# Pr' Klamfi

Landing page for Piknik prostor Pr' Klamfi, Kolovec (Domžale). Built with Vue 3 and Vite.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server on http://localhost:3000 (add `-- --host` to open it on the local network) |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint and auto-fix the code |

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages at
https://mark-vale.github.io/PrKlamfi/ (workflow: `.github/workflows/deploy.yml`).
Progress and logs are in the repo's **Actions** tab. A deploy can also be started
by hand there with **Run workflow**.

## Where things live

- `src/content.js`: all text, photos, menu items and contact details
- `src/components/`: one file per page section
- `src/styles/site.css`: colors, fonts, buttons and other shared styles (light and dark mode)
- `src/directives/reveal.js`: fade-in on scroll (`v-reveal`)
- `public/`: favicon and app icons

# rmharp.github.io

Personal portfolio site for Riley Harper. Built with [Astro](https://astro.build/).

## Development

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`. The workflow builds the Astro site and deploys the `dist/` folder.

**Important:** In the GitHub repository settings, set Pages source to "GitHub Actions" (not "Deploy from a branch").

## Structure

```
src/
  components/   Astro components for each section
  data/         JSON data files (experience, research, projects, reading list)
  layouts/      Base HTML layout with meta tags and theme setup
  pages/        Page routes (single index.astro)
  scripts/      Theme toggle and scroll animation JS
  styles/       Global CSS with light/dark theme variables
public/         Static assets (resume PDF, favicon, scripts)
```

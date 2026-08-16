# sidbaskaran.com

Source for [sidbaskaran.com](https://www.sidbaskaran.com), built with Next.js and hosted on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

The site is available at [localhost:3000](http://localhost:3000).

## Deployment

The `newsite` branch is the canonical branch. Every push to `newsite` runs the GitHub Pages workflow in `.github/workflows/deploy.yml`:

1. Install dependencies.
2. Export the Next.js site to `out/`.
3. Publish `out/` to GitHub Pages.

A normal push deploys the site:

```bash
git push
```

The custom domain is configured in the GitHub Pages settings for `sidnb13/sidnb13.github.io`.

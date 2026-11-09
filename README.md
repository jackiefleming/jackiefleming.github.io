# jackiefleming.github.io

Personal site for Jackie Fleming — Financial Planning and Analysis. Built with **Vite + React + React Router**, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Editing content

Almost all site copy lives in one file: [`src/data/resume.js`](src/data/resume.js).
Update `profile`, `highlights`, `strengths`, `competencies`, `interests`,
`education`, and `experience` there — the About and Resume pages read from it.
Requirements and the add-on backlog live in [`PRD.md`](PRD.md).

- **Phone number** is intentionally not on the site (email + LinkedIn only).
- **Portfolio** is hidden for now. To bring it back, replace the placeholder
  `projects` in `resume.js`, then uncomment the Portfolio import/route in
  `src/App.jsx` and the nav link in `src/components/Nav.jsx`.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. One-time setup: in the repo on GitHub, go to
**Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

## Structure

```
index.html            App shell + fonts + SPA redirect restore
public/404.html       GitHub Pages SPA deep-link fallback
src/
  main.jsx            React + Router entry
  App.jsx             Routes (/, /resume; /portfolio hidden)
  index.css           Editorial theme (all styles)
  data/resume.js      ← all site content
  components/         Nav, Footer
  pages/              About, Resume, Portfolio (hidden)
```

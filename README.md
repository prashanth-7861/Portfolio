# Prashanth Mudigonda — Cybersecurity Portfolio

Personal portfolio site showcasing cybersecurity projects, skills, and experience.

**Live site:** https://prashanth-portfolio.vercel.app

## Stack

Static site, no build step. React 18 + Babel Standalone are loaded from CDN and JSX is transpiled in the browser. Deployed on Vercel.

## Structure

```
portfolio.html          # main entry (served at /)
resume.html             # printable resume page
portfolio-data.js       # content (projects, skills, experience)
portfolio-app.jsx       # root React component
portfolio-hero.jsx      # hero section
portfolio-sidebar.jsx   # navigation sidebar
portfolio-skills.jsx    # skills grid
portfolio-projects.jsx  # projects showcase
portfolio-more.jsx      # additional sections
portfolio-terminal.jsx  # terminal-style component
tweaks-panel.jsx        # theme/layout controls
vercel.json             # Vercel routing + headers
```

## Local development

Open `portfolio.html` directly in a browser, or serve the folder with any static server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deployment

Pushes to `main` deploy automatically via Vercel. The `vercel.json` rewrites `/` to `/portfolio.html`.

## License

All rights reserved. Content and code in this repository are personal portfolio material.

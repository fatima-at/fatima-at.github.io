# Fatima Atwi, portfolio

A static website: plain HTML, CSS and a little JavaScript. No build step.

## Open it
Double-click `index.html`. Every page works from the folder, without a server.

## Edit
- Links (HAL, project page, LinkedIn, GitHub, email): `assets/js/site.js`, the `LINKS` block at the top. An empty value hides that link on every page. LinkedIn is empty until you paste your URL.
- CV: replace `assets/cv/Fatima_Atwi_CV.pdf` with your latest PDF, keeping the same file name.
- Colours and fonts: the `:root` block at the top of `assets/css/style.css`.
- Videos and images: `assets/media/` and `assets/img/`.

## Pages
- `index.html`: home (about, highlights, selected projects, skills)
- `projects.html`: all projects, with detail pages in `projects/`
- `experience.html`, `publications.html`, `education.html` (with honors and awards)

## Publish on GitHub Pages
1. Create a repository named `fatima-at.github.io`.
2. Upload the contents of this folder (not the folder itself) and commit.
3. The site appears at `https://fatima-at.github.io` within a minute or two.

The link-preview tags (`og:image`, `og:url`) assume that address. If you host it elsewhere, replace `https://fatima-at.github.io/` in the HTML files.

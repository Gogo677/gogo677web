# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Diego Jiménez González (Gogo677), a backend / full-stack .NET engineer, served as a static site (GitHub Pages) at `www.diegogojimenez.com` (see `CNAME`). Plain HTML and CSS with no JavaScript: there is no build step, package manager, linter, or test suite.

The site is **bilingual with one URL per language** (for SEO): English at `/` (`index.html`, also `x-default`) and Spanish at `/es/` (`es/index.html`). The two pages are hand-maintained translations of each other: any content or markup change must be made in both. Each page's `<head>` carries a canonical, `hreflang` alternates for both languages, localized `og:*` tags and a schema.org `Person` JSON-LD block; keep those in sync too, along with `sitemap.xml` (update `lastmod` when content changes). The header's `.lang-switch` link points to the other language. Because pages live at different depths, reference assets with root-absolute paths (`/CSS/...`, `/img/...`), never `./`.

`docs/` is gitignored on purpose: it holds the owner's LinkedIn CV export (with private phone/email), used as the source for site content. Anything committed to the repo is publicly served by GitHub Pages, so never commit it.

## Running locally

Serve the repo root so absolute paths like `/icons/favicon.svg` resolve:

```
python -m http.server 8000
```

## Architecture

- All content is hand-written in the two HTML pages. Sections (anchor ids are localized; EN / ES): `#home`/`#inicio` (hero), `#experience`/`#experiencia` (timeline of `.job` items), `#skills`/`#tecnologias` (`.skill-group` cards with `.tags`), `#projects`/`#proyectos` (personal `.project-card`s plus a compact `.academic-list` of school projects), `#education`/`#formacion` (education + certifications), `#contact`/`#contacto`.
- Contact is intentionally just a visible `mailto:` email address (owner's choice): no form.
- The `.tags` pill list is the shared pattern for tech labels across experience, skills, and projects.

## Styling

- `CSS/index.css` is the only stylesheet linked from the page. It `@import`s one file per section/component (`wraper`, `button`, `header`, `menu`, `hero`, `experience`, `tech`, `projects`, `education`, `contact`) and holds the design tokens, base styles, and shared classes (`.section`, `.section-title`, `.subsection-title`, `.tags`, `.footer`).
- Colors are CSS variables on `:root` (`--bg`, `--surface`, `--text`, `--muted`, `--border`, `--accent`, `--accent-hover`, `--accent-soft`, `--on-accent`), redefined under `prefers-color-scheme: dark`. Always use the variables so both themes keep working. Fonts: Inter (`--font-sans`) and JetBrains Mono (`--font-mono`, for small labels, dates, and tags).
- New component styles go in their own file under `CSS/`, imported from `index.css`.
- `CSS/style.css` is not imported anywhere; it's a leftover from the 2022 design. `tech-icons/` is also mostly unused now (only `flask-png.png` is referenced).
- `.wrapper` (in `wraper.css`, note the spelling) caps content width at 1040px.

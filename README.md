# Compawnion — GitHub Pages website (multi-page)

This is a static multi-page website for **Compawnion**, an adaptive AI dog training app concept.

## What’s inside
- Multiple HTML pages (no build tools required)
- Shared styling (`assets/styles.css`)
- Small JS for nav, FAQ accordion, pricing toggle (`assets/main.js`)
- SVG logo + simple phone mock

## Quick deploy (GitHub Pages)
1. Create a GitHub repo (public is easiest for Pages).
2. Upload the contents of this folder to the repo root (or push via git).
3. In GitHub: **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
4. Wait for the Pages URL to appear. Your home page is `index.html`.

## Custom domain (optional)
- Add a `CNAME` file with your domain (e.g., `compawnion.app`)
- Set DNS records per GitHub’s Pages instructions.

## Forms
This demo uses a “static” form (no backend).
To make it work on GitHub Pages, plug the form into:
- Formspree, or
- another form backend that supports static sites.

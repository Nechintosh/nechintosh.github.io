# Matteo Jiahao Chen — research portfolio

English and Chinese research portfolio with the original CVs embedded for download. The user requested GitHub Pages hosting and is choosing the real-name account/URL. No site content has been published.

## Open and edit

Open `docs/index.html` directly from disk. It contains its own styles, scripts, portrait, text, and both PDFs. It makes no runtime network requests and needs no preview server.

Edit the files in `src/`, then regenerate:

```bash
node scripts/build.mjs
node --check src/app.js
git diff --check
```

`src/content.mjs` contains both languages. Only its authored static translations are inserted as HTML; there is no user-generated content. Replace `assets/resume-en.pdf`, `assets/resume-zh.pdf`, or `assets/portrait.jpg` to update those assets, then rebuild. Commit the regenerated `docs/index.html` alongside the source changes.

## GitHub Pages

For a root URL such as `https://matteojiahaochen.github.io/`, the owning account or organization must have that matching name and the repository must be `matteojiahaochen.github.io`. Creating a repository with that name under `Nech07` does not provide that root address. The exact final account and repository are not configured yet.

Once the owner is confirmed, push to the matching repository and set **Settings → Pages → Deploy from a branch → main → /docs**. The committed `.nojekyll` disables Jekyll processing. No Actions workflow or dependency installation is needed. Follow the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

The downloadable CVs retain their original phone number, email, and WeChat details. The page itself uses email and professional profile links for contact.

## Content provenance

Copied on 2026-10-25 from `/home/nech/Research/CV/`:

- `resume/matteo_jiahao_chen_cv.tex` and `resume/matteo_jiahao_chen_cv_zh.tex`: source facts.
- `output/pdf/matteo_jiahao_chen_cv.pdf` and `output/pdf/matteo_jiahao_chen_cv_zh.pdf`: unchanged downloadable CVs.
- `photo/photo.jpg`: portrait.

Research claims preserve the CV's scope: SSPC is ongoing with evaluation pending, theorem-proving evaluations specify model and Pass@12, TimeColor results are team results, and the financial-agent score is from an internal benchmark.

## Verification

Build and JavaScript syntax checks passed. Static parsing checked unique IDs, valid internal anchors, portrait embedding, both PDF byte comparisons, and absence of external runtime assets.

The local file was opened in the app. Browser automation cannot inspect it: the browser policy permits only HTTP/HTTPS and rejects `file://`. Visual layout, responsive rendering, keyboard interaction, language switching, and clicked downloads still require direct user review or inspection after authorized publication. No preview server was started.

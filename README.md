# Matteo Jiahao Chen — research portfolio

English and Chinese research portfolio with the original CVs embedded for download. Site: **https://nechintosh.github.io/**. Repository: **https://github.com/Nechintosh/nechintosh.github.io**.

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

The confirmed owner is `Nechintosh`, and the repository is `nechintosh.github.io`. GitHub Pages publishes `main:/docs` at **https://nechintosh.github.io/**.

After editing and rebuilding, commit and push to `main`. Pages is configured as **Settings → Pages → Deploy from a branch → main → /docs**. The committed `.nojekyll` disables Jekyll processing. No custom Actions workflow or dependency installation is needed. Follow the [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

The downloadable CVs retain their original phone number, email, and WeChat details. The page itself uses email and professional profile links for contact.

## Content provenance

Copied on 2026-10-25 from `/home/nech/Research/CV/`:

- `resume/matteo_jiahao_chen_cv.tex` and `resume/matteo_jiahao_chen_cv_zh.tex`: source facts.
- `output/pdf/matteo_jiahao_chen_cv.pdf` and `output/pdf/matteo_jiahao_chen_cv_zh.pdf`: unchanged downloadable CVs.
- `photo/photo.jpg`: portrait.

Research claims preserve the CV's scope: SSPC is ongoing with evaluation pending, theorem-proving evaluations specify model and Pass@12, TimeColor results are team results, and the financial-agent score is from an internal benchmark.

## Verification

Build and JavaScript syntax checks passed. Static parsing checked unique IDs, valid internal anchors, portrait embedding, both PDF byte comparisons, and absence of external runtime assets.

The local file was opened in the app. Browser automation cannot inspect `file://` URLs, so browser QA used the authorized public deployment at https://nechintosh.github.io/. No preview server was started.

Live checks on 2026-10-25 confirmed the deployed HTML matches `docs/index.html` byte for byte, the portrait loads, English/Chinese switching updates the content and document language, résumé navigation reaches the contact section, and both downloaded PDFs match the source assets. The inspected viewport was 618 pixels wide with no horizontal overflow; other viewport sizes and exhaustive keyboard navigation were not interactively tested. A local screenshot is saved in ignored `output/live-portfolio.png`.

# Personal research website

## Objective and scope
Create an English-first, bilingual research portfolio and résumé for Matteo Jiahao Chen. Visitors can understand his research, inspect selected contributions, download either existing CV, and follow email, LinkedIn, and project links. The user requests a real-name github.io URL; account choice is pending. Do not publish under Nech07 or rename an account until that choice is resolved.

## Stack and commands
Dependency-free HTML, CSS, and browser JavaScript. Node.js is required only to regenerate the self-contained output.

- Build: `node scripts/build.mjs`
- Check JavaScript: `node --check src/app.js`
- Preview: open `docs/index.html` directly in a browser. No HTTP server.
- Deploy: push the reviewed site to the confirmed GitHub repository; GitHub Pages publishes `main:/docs`.

## Structure and code style
- `src/index.html`: semantic HTML layout with `{{translationKey}}` tokens.
- `src/content.mjs`: paired English and Chinese text, with evidence-qualified claims.
- `src/styles.css`: responsive layout and accessible focus styles.
- `src/app.js`: progressive language switching and résumé downloads.
- `assets/`: unchanged source CVs and portrait, copied from the local CV project.
- `scripts/build.mjs`: bundles content, styles, scripts, portrait, and PDFs into `docs/index.html`.

Use descriptive names and browser-native APIs. Example: `button.setAttribute('aria-pressed', String(isSelected));`.

## Verification and success criteria
- Direct file opening renders the portfolio; no localhost or runtime network fetches.
- English and Chinese content switches correctly, with accurate document language and button states.
- Both embedded résumé downloads match source files byte for byte.
- Layout fits 320, 768, 1024, and 1440 pixel widths, with keyboard-accessible controls.
- Existing CV content is the factual source; ongoing work and internal benchmark qualifications remain explicit.
- Deployment is complete only after GitHub Pages reports success and the live URL returns this site.

## Boundaries and plan
Always preserve original CV files and qualify research claims. Follow the user's explicit GitHub Pages hosting choice. Never publish to Sites or start a preview server. No external dependencies or tracking. Use email and LinkedIn for contact; the original downloadable CVs retain their existing contact details.

Implement the static page and bundle first, then add language and download enhancements. Verify directly from disk before committing and publishing. No backend, login, CMS, or contact form is required.

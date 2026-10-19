# Velvet Bloom Studio — project roadmap

Updated: 19 October 2026.

## Project scope

**A public portfolio demo for a fictional beauty studio.** Real appointments, salon contact details, a business address, opening hours, a database and an email service are outside this demo's scope. No business details need to be invented.

The future designer portfolio link is intentionally deferred. Its configuration is ready in the code, and the interface does not display an empty or inactive link.

Repository root: the outer project folder.
Application: the inner `velvet-bloom-studio/` folder containing `package.json`.
Pre-integration backup: `work/backup-before-integration-20261018/` (excluded from Git).

## Technology

| Area | Implementation |
| --- | --- |
| Framework | Next.js 16.4.2 App Router, React 19.3.0 |
| Language | TypeScript 5, strict mode |
| Styling | Tailwind CSS v4 and custom CSS; dark luxury design, English UI |
| Fonts | Local Cormorant Garamond and Inter, WOFF2, next/font/local, OFL licences |
| Imagery | Three local AI-created interiors, WebP and next/image; illustrative treatment photography from Unsplash |
| Interactions | React state/context, manual room tour, IntersectionObserver, requestAnimationFrame, native dialog, details/summary |
| Booking form | Browser-only demo: sample fill, validation, preview and reset |
| SEO | Metadata, domain-aware canonical URL, 1200 × 630 PNG Open Graph image, SVG icon, noindex |
| Validation | ESLint, TypeScript, Next.js production build, rendered HTML and Chrome browser checks |
| Deployment | Private GitHub repository and public Vercel demo; GitHub Actions checks on Node.js 24 |

## Implementation status

| Task | Status |
| --- | --- |
| Inspect source files, create a backup and integrate the original archive | COMPLETE |
| Hero, local fonts and responsive navigation | COMPLETE |
| Interior hero and consistent studio imagery | COMPLETE — three local WebP concepts, clearly labelled as AI-created |
| The studio section with three rooms, captions and previous/next controls | COMPLETE — rooms advance manually |
| Gentle zoom, parallax, scroll reveals and reading progress indicator | COMPLETE — no new libraries |
| Pause/Resume motion and prefers-reduced-motion support | COMPLETE — content remains visible without JavaScript |
| Services/pricing, story, experience, gallery, FAQ and footer | COMPLETE |
| Clear demo disclosure in the hero, form, FAQ and footer | COMPLETE |
| Illustrative prices and fictional guest reflections labelled clearly | COMPLETE |
| Remove copy promising a real studio location or future business details | COMPLETE |
| Populate the form from the selected treatment card | COMPLETE |
| Fill sample details using an example.com address and tomorrow's date | COMPLETE |
| Clear demo resets every field, selection, consent checkbox and message | COMPLETE |
| Remove the live endpoint, fetch and sending/success/error form modes | COMPLETE — environment variables cannot enable submissions |
| Project and privacy information at /privacy | COMPLETE FOR THE DEMO |
| Custom 404 page and metadata | COMPLETE |
| Skip link, labels, alt text, motion preferences, focus and accessible gallery | BASIC CHECKS PASSED |
| Future portfolio URL in projectInfo.portfolioUrl | READY — null; link remains hidden |
| Git ignore rules, CI workflow, .env.example and vercel.json | CONFIGURED |
| README files and roadmap reflect the portfolio scope | COMPLETE |

## Studio and motion revision — 19 October 2026

- Local lint and the production build PASSED, including the build's TypeScript phase.
- Browser checks covered all three rooms, previous/next wrapping, Enter activation, active selection, Pause/Resume, paused animations and removal of pending reveal states.
- Responsive checks at 320, 375, 768 and 1440 px showed no horizontal overflow. The mobile menu opens The studio and closes after selection.
- Opening a new gallery image, Escape and demo fill/preview/clear checks passed.
- The three local WebP images and /privacy returned 200. Server-rendered HTML kept all content visible without data-reveal-pending attributes.
- Interior views are fictional. AI disclosures appear in the room tour, gallery and /privacy. The three source images total 568 KB; Next.js also resizes them for delivery.
- Assets: public/images/studio-*.webp. Exact ImageGen prompts and provenance: docs/INTERIOR_ASSETS.md in the application.
- Reduced motion uses the system media query and server rendering without animations. Manual pause was verified; changing the operating system preference was not separately tested.
- [GitHub Site checks passed on Node.js 24](https://github.com/kreatorrdev/velvet-bloom-studio/actions/runs/39222504417).
- Vercel completed deployment through the existing GitHub main integration. The public site and all three interior images returned 200; room selection and active image animation were verified.

## Initial version checks — 18 October 2026

- `npm.cmd run lint`: PASSED without errors or warnings.
- `npm.cmd run typecheck`: PASSED.
- `npm.cmd run build`: PASSED; static pages and Open Graph PNG generated.
- Rendered HTML: one H1, 22 unique IDs, 31 valid internal anchor links, 10 images with alt attributes, noindex, demo disclosure and /privacy.
- Open Graph image: PNG, 1200 × 630.
- Selecting The Velvet Ritual sets body-ritual. Sample fill preserves the selected treatment. Preview reports that nothing was sent, saved or booked. Clear demo resets every field and the status.
- Responsive checks at 320, 375, 768 and 1440 px showed no horizontal overflow.
- The future portfolio link is absent while its URL is null.
- Gallery Tab/Shift+Tab, arrow keys, Escape, focus restoration, mobile navigation, FAQ, privacy and custom 404 checks passed.

Local checks used Node.js 26.5.0. The [initial GitHub CI run on Node.js 24](https://github.com/kreatorrdev/velvet-bloom-studio/actions/runs/39153440841) passed lint, TypeScript and the production build. A complete screen-reader or physical-device audit has not been performed. A dedicated italic font face and further image optimisation remain optional refinements.

## Repository and deployment status

| Item | Status |
| --- | --- |
| GitHub connector/account | CONNECTED — kreatorrdev confirmed |
| Project repository | CREATED AND POPULATED — private [kreatorrdev/velvet-bloom-studio](https://github.com/kreatorrdev/velvet-bloom-studio) |
| Local Git remote | CONNECTED — origin points to the private GitHub repository |
| Local and remote history | SYNCHRONISED — main tracks origin/main; source files are on GitHub |
| Vercel account and GitHub integration | CONNECTED — kreatorrdev/velvet-bloom-studio, source branch main |
| Vercel project and public URL | DEPLOYED — [velvet-bloom-studio.vercel.app](https://velvet-bloom-studio.vercel.app/); Production Ready |
| Optional Vercel conversation connector | Not installed; not required for the existing deployment or GitHub integration |

Source changes are published through the connected GitHub connector. Local history mirrors the exact GitHub commits without overwriting working files. Future manual push/fetch operations from a local terminal require refreshing that terminal's separate GitHub login; this does not affect the connected connector. Vercel deploys updates pushed to main.

## Initial public site checks — 18 October 2026

- The public homepage returned 200 and displayed the portfolio demo.
- Vercel showed Production Ready, GitHub main and the correct inner application directory.
- /privacy, /robots.txt, /opengraph-image and /icon.svg returned 200; an unknown page returned 404.
- Canonical metadata used the public domain. The demo intentionally kept noindex, nofollow.
- All loaded images displayed correctly. The gallery opened and closed with Escape; FAQ items expanded.
- Demo fill, preview and clear worked on the public site; nothing was submitted or booked.
- The mobile menu opened and closed with Escape; there was no horizontal overflow at 375 px.

## Delivery sequence and remaining work

| Order | Task | Status and completion criteria |
| --- | --- | --- |
| 1 | Complete Vercel connection | COMPLETE — account and production project accessible |
| 2 | Connect the GitHub repository | COMPLETE — private kreatorrdev/velvet-bloom-studio; no secrets or backups committed |
| 3 | Save and validate the source on GitHub | COMPLETE — source committed; Site checks passed on Node.js 24 |
| 4 | Deploy to Vercel | COMPLETE — Production Ready; application root is velvet-bloom-studio |
| 5 | Verify the public URL | COMPLETE — images, mobile navigation, gallery, FAQ, demo fill/preview/reset, privacy and 404 |
| 6 | Share the public demo URL | COMPLETE — https://velvet-bloom-studio.vercel.app/; a custom domain is optional |
| Later | Build the designer portfolio and add its link | INTENTIONALLY DEFERRED — does not block this demo |

This portfolio demo does not require real salon details, authentic customer reviews or a booking service. Real appointments would require a separate scope decision and implementation.

## Run locally

If the development server is already running, open `http://localhost:3000` or `http://127.0.0.1:3000`.

From the repository root, start the application in a normal terminal:

```powershell
cd velvet-bloom-studio
npm.cmd run dev -- --port 3000
```

Keep the terminal open. On Windows, START-LOCALHOST.cmd in the repository root is also available. After a fresh clone, install dependencies with `npm.cmd ci` from the application folder.

## File guide

Paths below are relative to the repository root.

- `velvet-bloom-studio/src/data/site.ts`: treatments, prices, FAQ, images, studio spaces and projectInfo.portfolioUrl.
- `velvet-bloom-studio/src/app/page.tsx`: page sections and copy.
- `velvet-bloom-studio/src/app/globals.css`: appearance, responsive styles and animation.
- `velvet-bloom-studio/src/components/StudioTour.tsx`: room selection and captions.
- `velvet-bloom-studio/src/components/SiteMotion.tsx`: motion preferences, pause control, reveals and parallax.
- `velvet-bloom-studio/src/components/BookingForm.tsx`: browser-only booking demo.
- `velvet-bloom-studio/.env.example`: optional public SITE_URL; no booking endpoint.
- `velvet-bloom-studio/README.md`: setup, technology and Vercel settings.
- `velvet-bloom-studio/docs/INTERIOR_ASSETS.md`: interior image provenance and prompts.
- `.github/workflows/ci.yml`: remote checks for source changes.

An identical copy of this roadmap is stored in the application folder beside package.json.


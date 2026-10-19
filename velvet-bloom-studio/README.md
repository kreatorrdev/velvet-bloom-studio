# Velvet Bloom Studio — portfolio demo

A fictional beauty and wellness studio website. The English UI presents an original brand concept, illustrative GBP prices, sample guest reflections and a browser-only booking demonstration. It does not represent a real salon.

Live demo: [velvet-bloom-studio.vercel.app](https://velvet-bloom-studio.vercel.app/).

## Run locally

From this folder (beside `package.json`):

```powershell
npm.cmd run dev -- --port 3000
```

Open `http://localhost:3000` or `http://127.0.0.1:3000`. Keep the terminal open. If the server already runs, use it rather than starting a second process.

From the outer project folder, use `START-LOCALHOST.cmd` or first run `cd velvet-bloom-studio`.
After a fresh clone, install the locked dependencies with `npm.cmd ci`. Node.js 24 is configured for the prepared GitHub CI and recommended for Vercel. Local checks used the installed Node.js 26.5.0.

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run start
```

## Portfolio behaviour

- The hero, FAQ, booking form and footer clearly identify the fictional portfolio concept.
- Prices, durations and guest reflections are examples; no real address, phone number or salon email is fabricated.
- Select a treatment card to populate the form. **Fill sample details** provides a fictional name, an `example.com` address and tomorrow’s local date. **Clear demo** clears the fields and feedback.
- **Preview your request** validates the fields and reports that nothing was sent, saved or booked.
- The form has no `fetch`, endpoint, persistence, database or booking service. Environment variables cannot activate real submissions in this portfolio version.
- `/privacy` explains the demo, sample content, fonts and external images. A real business privacy policy is not presented for a fictional salon.
- No analytics or marketing cookies are added by this application. Hosting and external image providers may process technical requests.

## Explore the studio and motion

**Discover the studio** opens a three-room interior presentation: the welcome, the treatment room and the quiet corner. Use the room buttons or previous/next arrows; rooms never advance automatically. The hero, story and gallery use the same original AI-created fictional interiors. Treatment images remain illustrative Unsplash photography.

**Pause motion** stops the slow image drift, parallax and scroll reveals; **Resume motion** restores them. The page follows `prefers-reduced-motion`, uses passive scroll handling with one scheduled animation frame, and keeps all content visible if JavaScript or IntersectionObserver is unavailable. Keyboard users can operate every room control and the existing gallery.

- `src/components/SiteMotion.tsx`: motion preference, pause control, scroll progress, reveal observer and bounded parallax.
- `src/components/StudioTour.tsx`: three manually selected room views, captions and keyboard-operable controls.
- `public/images/studio-*.webp`: three local 1672 × 941 images, 568 KB combined before Next.js delivery resizing.
- `docs/INTERIOR_ASSETS.md`: built-in ImageGen provenance and the exact prompts for all three images.

## Future designer portfolio link

The link is deliberately hidden until the designer portfolio is built. There is no inactive placeholder in the interface.

Later, edit `src/data/site.ts`:

```ts
export const projectInfo: { portfolioUrl: string | null } = {
  portfolioUrl: "https://your-real-portfolio-url",
};
```

Replace the example with the actual address and rebuild. Keep `portfolioUrl: null` until then. Creating the designer portfolio is deferred by the user and does not block this demo’s publication.

## Technology and files

Next.js 16.4.2 App Router, React 19.3.0, TypeScript 5, Tailwind CSS v4 and custom CSS. No additional npm packages were installed for the portfolio revision.

- `src/app/page.tsx`: hero, treatments, story, gallery, fictional reflections, process, FAQ, booking and footer.
- `src/data/site.ts`: sample content, image URLs and the future portfolio link.
- `src/components/BookingForm.tsx`: local sample data, validation, preview and reset.
- `src/components/BookingContext.tsx`: selected treatment and demo status.
- `src/components/Gallery.tsx`: native modal with keyboard navigation and focus handling.
- `src/app/fonts/`: local Cormorant Garamond and Inter WOFF2 assets with OFL license.
- `src/app/opengraph-image.tsx`: generated 1200 × 630 PNG share image.
- `src/app/privacy/page.tsx`: demo and privacy information; `not-found.tsx`: custom 404.

Standard scripts use Webpack because Turbopack path handling failed in the restricted Windows environment. The installed Tailwind loader extends Next’s CSS pipeline. Static generation is sequential to avoid the observed Windows file creation issue. Optional `dev:turbo` and `build:turbo` scripts are retained but unverified here.

Fonts are local and do not require Google Fonts requests during build. The cached upright Cormorant face is included; italic text uses browser synthesis. The interior concepts are local WebP assets delivered with Next.js image resizing. Treatment photography uses external Unsplash URLs for visual direction and needs internet access. Images do not depict a real Velvet Bloom location.

## GitHub / Vercel deployment

The outer folder is the Git root on `main`. Its `.github/workflows/ci.yml` installs the lockfile, runs lint, builds and checks TypeScript on Node.js 24. Backups, QA output, `.env.local`, `node_modules`, `.next` and `.vercel` are ignored. `.env.example` is included.

Source is saved in the private [kreatorrdev/velvet-bloom-studio repository](https://github.com/kreatorrdev/velvet-bloom-studio). Local main tracks origin/main and mirrors the same history. [GitHub Site checks](https://github.com/kreatorrdev/velvet-bloom-studio/actions/runs/39222504417) passed on Node.js 24. The connected GitHub app can publish changes; a future manual push/fetch from the local terminal requires refreshing its separate GitHub login. The [Vercel project](https://vercel.com/kreatorrdev/velvet-bloom-studio) is connected to GitHub main and its production deployment is Ready. Saving changes to main triggers another deployment.

For a Vercel project using the outer repository:

| Setting | Value |
| --- | --- |
| Root Directory | `velvet-bloom-studio` |
| Framework | Next.js |
| Node.js | 24.x |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | Next.js default |

If publishing only the inner application as a repository, use `.` as Root Directory and adjust the outer CI workflow paths accordingly.

`SITE_URL` is optional: set it to the actual public origin with no extra path. Vercel-provided deployment URLs are used when it is absent. The Vercel default domain is sufficient; a purchased domain is optional. There is no booking or mail-service environment variable to configure.

The standalone demo intentionally keeps `noindex, nofollow`. It can be shared by URL and linked from the future designer portfolio without presenting a fictional salon as a real indexed business. Indexing can be reconsidered later; no invented business structured data or rating is included.

Official references: [Next.js on Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [Vercel Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions).

## Verification

On 18 October 2026, the portfolio revision passed lint, TypeScript and production build. Rendered HTML checks passed: one H1, unique IDs, valid internal anchors, image alt attributes, noindex and a 1200 × 630 PNG Open Graph image. Browser checks confirmed treatment selection, sample fill, preview feedback, clearing all fields and no horizontal overflow at 320, 375, 768 and 1440 px. The deferred portfolio link is absent from the interface.

The earlier version also passed gallery keyboard/focus, mobile menu, FAQ, privacy and custom 404 checks; those behaviours are retained. This is not a complete screen-reader or physical-device audit. Remote CI has passed on Node.js 24.

The public Vercel site was verified on 18 October 2026: homepage, privacy, robots, share image and icon returned 200; an unknown route returned 404. Canonical uses the live domain and the demo remains noindex. Images loaded, gallery and FAQ worked, sample fill/preview/reset passed, and the mobile menu opened and closed with Escape without horizontal overflow at 375 px.

On 19 October 2026 the interior and motion revision passed local lint, production build and its TypeScript phase. Chrome checks covered room selection and wrapping, keyboard activation, pause/resume, the mobile navigation, gallery Escape and demo fill/preview/reset. Widths 320, 375, 768 and 1440 px had no horizontal overflow. Local images returned 200, and server HTML kept every reveal visible without JavaScript. System reduced-motion support is implemented; changing the operating system preference was not separately emulated in this browser session.

Project status and remaining work: `PROJECT_ROADMAP.md` (also in the outer Git root).


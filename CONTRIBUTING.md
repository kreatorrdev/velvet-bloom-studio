# Contributing to Velvet Bloom Studio

Project documentation and contribution descriptions are maintained in English. Literal interface labels, identifiers and recorded output may retain their original language when needed for accuracy.

## Set up a working copy

Use Node.js 24. From the repository root, enter `velvet-bloom-studio`, run `npm ci`, then `npm run dev -- --port 3000`.

Run application commands from the inner `velvet-bloom-studio/` directory. The Git repository and contribution guide are in the outer folder.

## Make and validate a change

1. Create a focused branch from the current default branch and read the relevant specification and current status.
2. Make the change and update the affected English documentation.
3. For application changes, run the applicable checks below and inspect the affected experience.
4. Review the diff and open a pull request describing the problem, resulting behavior and checks actually performed. For documentation-only changes, verify links, paths and commands; a full application build is needed only if the change affects it.

~~~sh
npm run lint
npm run build
npm run typecheck
~~~

Check treatment selection, sample details, validation, preview/reset, all three tour rooms, gallery keyboard/focus behavior, mobile navigation, pause/resume and reduced motion. The booking preview must continue to say that nothing was sent, saved or booked.

## Content and configuration

Keep prices and guest reflections illustrative. Preserve font licenses and update [interior image provenance](velvet-bloom-studio/docs/INTERIOR_ASSETS.md) when replacing studio scenes.

Use your own local configuration. Commit configuration templates with placeholders; keep real credentials, runtime databases, personal records and generated build caches out of Git. Do not add a license or claim redistribution rights for third-party material without the owner's decision.

## Release notes

The Vercel Root Directory is `velvet-bloom-studio`. Read the [application README](velvet-bloom-studio/README.md#github--vercel-deployment). Keep the outer and inner roadmaps synchronized.

Report dated verification honestly. Existing historical PASS records describe their recorded environment and do not establish that a new checkout or deployment has passed the same checks.

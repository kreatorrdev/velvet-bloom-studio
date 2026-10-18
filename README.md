# Velvet Bloom Studio

Fictional beauty and wellness studio portfolio demo, built with Next.js 16, React, TypeScript and Tailwind CSS v4. The UI is English. Treatments, GBP prices and guest reflections are illustrative. The booking demo validates sample data locally and never sends or stores entries.

Source repository: [kreatorrdev/velvet-bloom-studio](https://github.com/kreatorrdev/velvet-bloom-studio) (private).
[Site checks passed on Node.js 24](https://github.com/kreatorrdev/velvet-bloom-studio/actions/runs/39153440841).
Live demo: [Velvet Bloom Studio](https://velvet-bloom-studio.vercel.app/), deployed on Vercel from this repository's main branch. The designer portfolio link is intentionally deferred.

The application is in the inner `velvet-bloom-studio/` directory, next to its `package.json`.

```powershell
cd velvet-bloom-studio
npm.cmd ci
npm.cmd run dev -- --port 3000
```

Open http://localhost:3000 or http://127.0.0.1:3000. If it already runs, keep using that server.
For production: `npm.cmd run build`, then `npm.cmd run start`.
On Windows, `START-LOCALHOST.cmd` is a convenience launcher.

- [Application setup and deployment](velvet-bloom-studio/README.md)
- [Plan i status projekta](PROJECT_ROADMAP.md)

For Vercel imports of this outer repository, set Root Directory to `velvet-bloom-studio` and use Node.js 24.
The pre-integration backup is in `work/backup-before-integration-20261018/`, excluded from Git.

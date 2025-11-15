mp## Quick orientation — what this repo is

- Single-page React + TypeScript site built with Vite and Tailwind. Live user site: `https://rudraprsd.github.io/`.
- UI is assembled from a small design system under `src/components/ui/*` (shadcn + Radix primitives). Reusable project-specific components live under `src/components/projects`.
- Content (blogs, projects) is stored as plain TypeScript objects under `src/data/*` and imported with `import.meta.glob` (see `src/data/blogs/index.ts`).
- Routing is client-side using `react-router-dom`'s `BrowserRouter` defined in `src/App.tsx`.

## Essential files and where to look

- app entry: `index.html` -> `src/main.tsx` -> `src/App.tsx`
- Routes: `src/App.tsx` (look at explicit paths `/`, `/projects`, `/blog`, `/blog/:id`)
- Data/content: `src/data/blogs/*` and `src/data/projects/*`. Blog shape: `src/data/blogs/types.ts`.
- UI components: `src/components/ui/*` and one-off components in `src/components/*`.
- Vite config and aliases: `vite.config.ts` — `@` resolves to `./src`.
- Build/deploy config: `package.json` (scripts) and `README.md` (notes about deploy-from-branch).

## Developer commands (run locally)

- Install: `npm install`
- Dev server (Vite, binds to host `::` on port 8080): `npm run dev` (visit `http://localhost:8080`)
- Build (production): `npm run build` (produces `dist/`)
- Preview production build locally: `npm run preview`
- Lint: `npm run lint`

Notes: the Vite server is configured to run on port 8080 in `vite.config.ts`. The repo sets `homepage` in `package.json` to `https://rudraprsd.github.io` and `base: '/'` in `vite.config.ts` (root path for a user site).

## Important patterns & conventions for code changes

- Content is static TS objects, not markdown files. To add a blog: create a new `src/data/blogs/<slug>.ts` exporting a `Blog` object that matches `src/data/blogs/types.ts`. The loader `src/data/blogs/index.ts` uses `import.meta.glob('./*.ts', { eager: true })` so files are picked up automatically (except `index.ts`, `types.ts`).
- Re-exports: `src/data/blogs/index.ts` also re-exports named variables (see the `productionMlSystems` export). If you need a named export for backwards compatibility, ensure your variable name matches the expected identifier.
- UI components follow a small atomic pattern: prefer existing `components/ui/*` primitives (Button, Card, Select, etc.). New components should live under `src/components/*` and reuse `@/components/ui` primitives when possible.
- Routing: the app uses `BrowserRouter`. Any change that affects server-side paths (e.g., GitHub Pages direct links) must be handled via a static fallback (see next section).

## GitHub Pages / routing gotcha (must-know)

- This is a client-side SPA. Directly visiting `https://rudraprsd.github.io/blog` will attempt to fetch `/blog/index.html` from GitHub Pages and fail unless a fallback is provided.
- Recommended repository practice already used by many in this codebase: add a `public/404.html` that fetches and injects the root `index.html` and restores the requested URL (so `BrowserRouter` can handle it). Example lives in discussion, and adding `public/404.html` is the least-intrusive fix for GitHub Pages deployments.

## Integration points & external services

- Google Analytics (GA4) is wired in `src/lib/analytics.ts` (measurement id `G-TVCLDL6TFH`) and initialized in `src/App.tsx` via `AnalyticsTracker`.
- React Query (`@tanstack/react-query`) is used for async data; a global `QueryClient` is provided in `src/App.tsx`.

## Testing & CI

- There are no unit test frameworks or CI workflows present in the repo by default. Linting via `npm run lint` is available.
- README notes the repo does not currently use GitHub Actions and is deployed from a branch; follow the repo's existing deployment process rather than adding an unfamiliar workflow.

## Useful small examples to copy/paste

- Add a blog (minimal):

  - File: `src/data/blogs/my-new-post.ts`
  - Content: follow `src/data/blogs/the-bitter-lesson.ts` (export const myNewPost: Blog = { id: 'my-new-post', title: '…', description: '…', date: 'DD-MM-YYYY', tags: [], content: `...` })

- Read route example (render blog detail): `src/pages/BlogDetail.tsx` and how `blogs` array is consumed from `src/data/blogs/index.ts`.

## What to avoid / gotchas for AI edits

- Don't assume server-side rendering: code expects SPA behavior with `BrowserRouter` and client-only data imports.
- When changing import paths, prefer the `@` alias (see `vite.config.ts`) to keep imports consistent.
- Avoid adding build-time node-only APIs into files that run in the browser (e.g., `fs` in code imported by the app).

---
# Tofa David — Product Portfolio

A production-ready Next.js portfolio for product designer Tofa David.

## Run locally

You need Node.js 24 and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify the production build

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Upload this folder to a GitHub repository, or import it directly with the Vercel CLI.
2. Create a new Vercel project and select the repository.
3. Vercel should detect **Next.js** automatically.
4. Keep the build command as `npm run build` and leave the output directory blank.
5. Deploy. No environment variables are required.

After connecting a custom domain, you can optionally add:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This gives social-share previews a stable canonical origin. Include the `https://` prefix and do not add a trailing slash.

## Main routes

- `/` — portfolio home
- `/about` — profile and experience
- `/projects/bongs` — Bongs case study
- `/projects/suburban-cloud` — Suburban Cloud case study
- `/projects/smartseal` — SmartSeal product design case study
- `/projects/alphasafe` — Alphasafe case study

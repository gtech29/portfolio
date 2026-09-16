# Juan Rodriguez — Personal Portfolio

Production portfolio for Juan Rodriguez, an Information Systems Security Engineer with a Computer Science background and experience in cybersecurity, systems integration, network analysis, technical project delivery, and quality assurance.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4 for the base build pipeline
- Custom CSS for the visual system
- Lucide React for small interface icons

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`.

## Checks and production build

```bash
npm run lint
npm run test
npm run build
npm start
```

`npm run test` is the TypeScript check because this portfolio does not currently include a separate test suite.

## Content updates

Resume-grounded content lives in [`src/data/resume.ts`](./src/data/resume.ts). Update the profile, skills, experience, training, military experience, or education there so the homepage stays consistent.

- Add or update the LinkedIn and GitHub URLs in `profile` in `src/data/resume.ts`.
- A resume button is intentionally omitted until a public PDF is added to the project.
- The StelEsthetics case study lives at `src/components/StelEstheticsCaseStudy.tsx` and `/case-studies/steleesthetics`.

## Optional Google Analytics

Analytics is disabled by default. To enable it, set the public measurement ID in the deployment environment:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The site works normally without this variable. `NEXT_PUBLIC_SITE_URL` can also be set to change the canonical URL, sitemap, robots file, and Open Graph URL:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

Do not commit `.env` files, credentials, API keys, or private key material.

## Deployment

The app can be deployed to Vercel or Netlify using the standard Next.js configuration:

1. Install dependencies with `npm install`.
2. Use `npm run build` as the build command.
3. Use `npm start` for a Node.js server deployment, or use the platform's native Next.js runtime.
4. Configure `NEXT_PUBLIC_SITE_URL` and, optionally, `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the deployment environment.

The project includes security response headers, a sitemap, and a robots route. The old project and form routes redirect to the current single-page portfolio or the dedicated StelEsthetics case study.

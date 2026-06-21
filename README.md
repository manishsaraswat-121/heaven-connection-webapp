# The Heaven Connection — Next.js Luxury Baking Site

This repository contains a production-ready scaffold for "The Heaven Connection" — a premium baking and courses website built with Next.js App Router (Next 15), TypeScript, Tailwind CSS, Framer Motion, React Hook Form, Zod, MDX, and more.

Quick start

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Open http://localhost:3000

Notes
- Images in `public/generated/` are placeholders and prompts are in `public/generated/prompts/` for AI generation.
- Blog content is MDX inside `content/blog/`.
- Forms redirect to WhatsApp using the utility in `lib/whatsapp.ts`.

Environment
- To integrate Resend for transactional emails, add `RESEND_API_KEY` to environment variables and follow the example in `emails/resend-example.ts`.

Deployment
- Deploy to Vercel for best compatibility with Next.js App Router.
- Build: `npm run build` then `npm run start`.

This scaffold prioritises a luxury-first design language, accessible semantic markup, and a static-first approach — no database or authentication included.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Landing page for "קשב הלב" (Keshev HaLev) — Hila Ben Gera's CBT therapy practice. Converts visitors (parents and adults) into leads. RTL Hebrew site with English professional terms.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4** + **shadcn/ui**
- **Framer Motion** — scroll & entrance animations
- **GSAP** — available for advanced animations
- **React Hook Form + Zod** — form handling & validation
- **Lucide React** — icons

## Architecture

Single-page landing with sections composed in `src/app/page.tsx`:

- `src/components/Navbar.tsx` — Sticky nav, smooth scroll, mobile hamburger
- `src/components/sections/Hero.tsx` — Main CTA with "fork" buttons (youth / adults)
- `src/components/sections/Authority.tsx` — Credentials & trust signals
- `src/components/sections/YouthSection.tsx` — Youth & parents CBT topics (broad scope)
- `src/components/sections/AdultSection.tsx` — Adults & couples track
- `src/components/sections/CbtMethod.tsx` — CBT methodology accordion
- `src/components/sections/Testimonials.tsx` — Social proof (placeholder quotes)
- `src/components/sections/ContactForm.tsx` — Lead form (name, phone, dropdown)
- `src/components/Footer.tsx`
- `src/components/Analytics.tsx` — GA4 + Facebook Pixel stubs

## Key Details

- **RTL**: Set in `layout.tsx` (`dir="rtl"`, `lang="he"`, Rubik font with Hebrew subset)
- **Colors**: Mint `#B2D8C1`, Rose `#E6A8A8`, Cream `#FDF8F0`, Warm Brown `#8B7355` — defined as CSS vars in `globals.css` and Tailwind theme
- **Form submission**: `POST /api/contact` → proxies to external endpoint via `CONTACT_ENDPOINT_URL` env var
- **Analytics**: Set `NEXT_PUBLIC_FB_PIXEL_ID` and `NEXT_PUBLIC_GA_MEASUREMENT_ID` env vars to enable
- **No database** — all leads go to external endpoint

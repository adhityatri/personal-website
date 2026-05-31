# Personal Website — utomosolutions.com

## Overview

Personal portfolio website for **Adhitya Tri Wahyu Utomo**, a Software Engineer based in Jember, Indonesia. The site showcases work experience, projects, bio, and contact information.

## Tech Stack

- **Framework**: Nuxt 3.17+ (SSR disabled, client-side SPA with static generation)
- **UI**: Vue 3.4 with Composition API (`<script setup>`)
- **Styling**: Tailwind CSS 4 + Nuxt UI v3
- **Responsive**: `@nuxtjs/device` composable (`useDevice()`)
- **Images**: `@nuxt/image` with ImageEngine CDN (avif, 60% quality)
- **Font**: M PLUS Rounded 1c (Google Fonts)
- **Package Manager**: Bun
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
├── app.vue                  # Root layout (TopBar + NuxtPage + Footer)
├── nuxt.config.ts           # Nuxt configuration
├── app.config.ts            # App-level config (profile, UI theme)
├── package.json             # Dependencies and scripts
├── assets/css/main.css      # Global styles, Tailwind + Nuxt UI imports
├── data/
│   └── project.json         # Project portfolio data (9 entries)
├── pages/
│   ├── index.vue            # Homepage
│   ├── work/index.vue       # Full project listing
│   ├── blog/index.vue       # Placeholder
│   ├── lab/index.vue        # Placeholder
│   └── contact/index.vue    # Contact page
├── components/
│   ├── TopBar.vue           # Responsive navigation bar
│   ├── NavMenu.vue          # Navigation links + Resume button
│   ├── HeroProfile.vue      # Hero section with intro text
│   ├── HeroImage.vue        # Profile photo with decorative shapes
│   ├── Bio.vue              # Career timeline
│   ├── Project.vue          # Project grid (reads from JSON)
│   ├── Card.vue             # Reusable card wrapper
│   ├── Promote.vue          # Call-to-action banner
│   ├── quote.vue            # Styled quote block
│   ├── GetInTouch.vue       # Email CTA button
│   ├── SocialMedia.vue      # LinkedIn/GitHub links
│   ├── MyPicture.vue        # Contact page photo
│   ├── app/
│   │   ├── Brand.vue        # Rotating text brand in TopBar
│   │   ├── Footer.vue       # Site footer
│   │   └── Title.vue        # Section heading with accent bar
│   └── ...
├── .github/workflows/
│   └── build-and-deploy.yml # CI/CD pipeline
└── .nuxt/                   # Generated Nuxt build artifacts
```

## Commands

```bash
bun install          # Install dependencies
bun run dev          # Start dev server (port 3001)
bun run build        # Build for production
bun run generate     # Generate static site
bun run preview      # Preview production build
bun run deploy       # Manual deploy to GitHub Pages
```

## Design System

- **Primary**: `#006d77` (teal)
- **Secondary**: `#ffddd2` (peach)
- **Accent**: `#83c5be` (mint)
- **Container max-width**: 900px
- **Color mode**: Disabled (light only)

## Key Patterns

- **`hydrate-never`**: Static components skip client-side hydration for performance
- **Island components**: Experimental `componentIslands` enabled
- **View transitions**: Smooth page navigation via experimental View Transition API
- **Responsive layout**: Uses `useDevice()` composable instead of CSS media queries
- **SEO**: Each page includes full OpenGraph and Twitter Card meta tags via `useHead()`
- **Static data**: Projects from `data/project.json`; all other content hardcoded in components

## Deployment

- Triggers on push to `nuxt-ui` branch
- GitHub Actions runs `npm install` + `npm run generate`
- Deploys `dist/` folder to GitHub Pages via `JamesIves/github-pages-deploy-action@v4`
- `.nojekyll` file present to bypass Jekyll processing

## Notes

- Blog and Lab pages are placeholders (under construction)
- Resume button links to a Google Drive PDF
- No backend/API — purely static site
- Images served via ImageEngine CDN (`https://85iby668.dev.cdn.imgeng.in`)

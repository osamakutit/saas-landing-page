# SaaS Landing Page

A production-ready SaaS marketing site built with React, TypeScript, Vite, and Tailwind CSS v4. Designed for clarity, conversion, and a polished light/dark experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg)

## Overview

This project is a full landing page template for SaaS and AI products. It includes a hero section, feature grid, pricing, workflow steps, testimonials, FAQ, contact form, and footer — all responsive and theme-aware.

The design system uses semantic surface colors, high-contrast typography in dark mode, glassmorphism cards, and gradient accents tuned for both themes.

## Features

| Section | Description |
|---------|-------------|
| **Hero** | Split layout with product preview, stats, floating metric cards, and trust logos |
| **Features** | Bento-style grid with icon cards and hover animations |
| **Pricing** | Three-tier plans with highlighted “Most Popular” option |
| **How It Works** | Three-step timeline with connected flow |
| **Testimonials** | Star ratings, gradient avatars, and quote cards |
| **FAQ** | Animated accordion with smooth expand/collapse |
| **Contact** | Two-column layout with contact info and validated form |
| **Navbar** | Scroll-aware blur, mobile menu, dark mode toggle |
| **Footer** | Multi-column links and social placeholders |

### Design & UX

- Light and dark themes with intentional contrast ratios
- Semantic color tokens (`surface`, `content`, `border`) for consistent theming
- Plus Jakarta Sans typography
- Mesh gradients, dot patterns, and glass card utilities
- Form validation via `react-hook-form`
- Sign-up modal with async submit flow

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons | Lucide React |
| Forms | React Hook Form |

## Project Structure

```
saas-landing-page/
├── src/
│   ├── assets/              # Static images (hero mockup, etc.)
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation + theme toggle
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Feature grid
│   │   ├── Pricing.tsx      # Pricing cards
│   │   ├── HowItWorks.tsx   # Step-by-step flow
│   │   ├── Testimonials.tsx # Social proof
│   │   ├── FAQ.tsx          # Accordion FAQ
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Modal.tsx        # Sign-up modal shell
│   │   ├── SignUpForm.tsx   # Modal form logic
│   │   └── SectionHeader.tsx# Reusable section titles
│   ├── App.tsx              # Page composition
│   ├── index.css            # Tailwind + design tokens + utilities
│   └── main.tsx             # Application entry
├── tailwind.config.cjs      # Theme extensions (colors, shadows, fonts)
├── vite.config.ts           # Vite + React + Tailwind plugins
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (or pnpm / yarn)

### Installation

```bash
git clone <repository-url>
cd saas-landing-page
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

The optimized output is written to `dist/`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run Oxlint on the codebase |

## Theming

Dark mode is toggled via the moon/sun control in the navbar. It applies the `dark` class to the document root.

### Color Tokens

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `surface` | white | `#090D14` | Page background |
| `surface-raised` | — | `#121A28` | Cards and panels |
| `surface-overlay` | — | `#1A2436` | Elevated inputs/modals |
| `content` | gray-800 | `#F1F5F9` | Primary text |
| `content-muted` | gray-600 | `#A8B4C7` | Secondary text |
| `border` | gray-200 | `#2A3A52` | Card and section borders |
| `primary` | `#4F46E5` | `#818CF8` (glow) | CTAs and accents |

Custom utilities (`glass`, `mesh-gradient`, `btn-primary`, etc.) are defined in `src/index.css` with `.dark` overrides.

## Customization

**Brand colors** — Edit `tailwind.config.cjs` under `theme.extend.colors`.

**Section copy** — Update text directly in each component under `src/components/`.

**Forms** — Wire `Contact.tsx` and `SignUpForm.tsx` `onSubmit` handlers to your API, Formspree, or serverless endpoint.

**Fonts** — Replace the Google Fonts link in `index.html` and update `fontFamily` in the Tailwind config.

## Environment Variables

Create a `.env` file for backend integration when needed:

```dotenv
VITE_API_URL=https://api.example.com
```

Access in code via `import.meta.env.VITE_API_URL`.

## Browser Support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Requires ES2020+ and CSS backdrop-filter support for glass effects.

## License

MIT — free to use, modify, and distribute.

# Space Tourism

Futuristic space travel booking site with countdown timers, destination details, and a multi-step booking wizard — all fully internationalized.

**[Live Demo](https://space-tourism.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

SpaceVoyager is a demo space tourism platform where users can browse destinations (Moon, Mars, Orbital Station, Asteroid Belt), view cabin classes and pricing, check launch schedules with live countdowns, and walk through a complete booking flow. Every piece of text is translated using [General Translation](https://generaltranslation.com), demonstrating how `gt-next` handles complex real-world UI patterns.

## GT Features Used

- `<T>` — JSX translation for all user-facing text
- `<Currency>` — Locale-aware currency formatting for cabin prices
- `<Num>` — Number formatting for distances, travel times, and seat counts
- `<DateTime>` — Date/time formatting for launch dates
- `<Plural>` — Pluralization for passenger counts
- `<LocaleSelector>` — Built-in language picker
- `getGT` / `useGT` — String translations for metadata and dynamic content
- `loadTranslations` — Local translation file loading

## Getting Started

```bash
git clone https://github.com/gt-examples/space-tourism.git
cd space-tourism
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)

# Shondhikkhon — Wedding Photography Website

A luxury wedding photography & cinematography website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Deployable to **Cloudflare Pages** (static export) or as a **Docker container** (nginx).

---

## Quick Start

### Option A: Local dev (Node)

```bash
npm install
npm run dev          # http://localhost:3000
```

### Option B: Docker (production build)

```bash
docker compose up --build    # http://localhost:3000
```

### Option C: Docker dev server (hot reload)

```bash
docker compose --profile dev up dev   # http://localhost:3001
```

---

## Project Structure

```
shondhikkhon-website/
├── public/
│   └── images/
│       ├── logo.png
│       ├── carousel/          # Hero carousel (5 slides, 1920px wide)
│       │   ├── 01.jpg
│       │   └── ...05.jpg
│       └── events/            # One folder per event
│           ├── rahim-and-sarah/
│           │   ├── cover.jpg  # Thumbnail shown in portfolio grid
│           │   ├── 001.jpg
│           │   └── ...
│           └── ...
├── images_for_site/           # Raw high-res originals (source of truth)
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Homepage (hero carousel + featured events)
│   │   ├── about/
│   │   ├── portfolio/
│   │   │   ├── page.tsx       # Portfolio grid + filters
│   │   │   └── [slug]/        # Individual event lightbox gallery
│   │   ├── packages/
│   │   ├── book-us/
│   │   └── terms/
│   ├── components/
│   │   ├── HeroCarousel.tsx   # Auto-advancing hero carousel
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppFloat.tsx
│   │   └── SectionHeading.tsx
│   └── lib/
│       └── data.ts            # ⭐ ALL CONTENT LIVES HERE
├── Dockerfile                 # Multi-stage: Node build → nginx serve
├── docker-compose.yml         # prod + dev profiles
├── nginx.conf                 # Gzip + cache headers + SPA routing
└── package.json
```

---

## Adding a New Event

### Step 1: Add & compress photos

Put raw images in `images_for_site/` then compress them:

```bash
mkdir -p public/images/events/bride-and-groom

# Cover image (1280px wide)
ffmpeg -i images_for_site/YOUR_COVER.jpg -vf "scale=1280:-1" -q:v 5 public/images/events/bride-and-groom/cover.jpg

# Gallery images (loop)
for i in $(seq -w 1 20); do
  ffmpeg -i "images_for_site/YOUR_IMG_$i.jpg" -vf "scale=1280:-1" -q:v 5 "public/images/events/bride-and-groom/${i}.jpg"
done
```

### Step 2: Register the event

Open `src/lib/data.ts` and add to the `events` array:

```typescript
{
  slug: 'bride-and-groom',
  couple: 'Bride & Groom',
  date: '2026-03-15',
  eventType: 'wedding',  // holud | wedding | reception | nikkah | engagement | mehendi
  venue: 'Venue Name, City',
  coverImage: '/images/events/bride-and-groom/cover.jpg',
  images: [
    '/images/events/bride-and-groom/001.jpg',
    // ...
  ],
  description: 'A brief description.',
  featured: true,
}
```

### Step 3: Commit and deploy

```bash
git add public/images/events/bride-and-groom src/lib/data.ts
git commit -m "feat: add Bride & Groom event"
git push   # Cloudflare Pages auto-deploys
```

---

## Image Compression Reference

| Target | Resolution | ffmpeg flags | Approx size |
|--------|-----------|--------------|-------------|
| Hero carousel | 1920px wide | `-vf "scale=1920:-1" -q:v 4` | ~300–500 KB |
| Gallery / cover | 1280px wide | `-vf "scale=1280:-1" -q:v 5` | ~150–300 KB |
| Thumbnail | 640px wide | `-vf "scale=640:-1" -q:v 6` | ~50–100 KB |

---

## Updating Hero Carousel

Edit the `SLIDES` array in `src/components/HeroCarousel.tsx`:

```tsx
const SLIDES = [
  '/images/carousel/01.jpg',
  // add/remove slides here — they auto-advance every 5 seconds
];
```

---

## Docker Reference

```bash
# Build and run production container
docker compose up --build

# Run in background
docker compose up -d

# Stop
docker compose down

# Rebuild after code changes
docker compose up --build --force-recreate
```

The production image uses **nginx:alpine** to serve the Next.js static export with:
- gzip compression
- 1-year cache headers for assets
- SPA-style routing fallback

---

## Deploy to Cloudflare Pages

### Option A: Git integration (recommended)

1. Push this repo to GitHub
2. Cloudflare Pages → Create project → Connect repo
3. Build settings:
   - Framework: **Next.js (Static Export)**
   - Build command: `npm run build`
   - Output directory: `out`
4. Deploy

### Option B: Manual upload

```bash
npm run build
npx wrangler pages deploy out --project-name=shondhikkhon
```

---

## Customization

| What | Where |
|------|-------|
| Contact details, social links | `src/lib/data.ts` → `siteConfig` |
| Packages & pricing | `src/lib/data.ts` → `packages` |
| Colors (maroon, gold) | `tailwind.config.js` |
| Fonts | `tailwind.config.js` + `globals.css` |
| Carousel interval | `HeroCarousel.tsx` → `INTERVAL` |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | Framework (Static Export) |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| nginx | Container serving |
| Docker | Containerization |
| Cloudflare Pages | Hosting |

---

## License

© Shondhikkhon. All rights reserved.
